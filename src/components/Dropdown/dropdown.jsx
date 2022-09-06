import './dropdown.scss';
import React, { useState, useEffect, useRef, createContext, useMemo, useContext } from 'react';
// import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Path from '../routes/menuItem';
import breadcrumb from '../routes/routes';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';

export const OpenContext = createContext({
  open: true,
  setOpen: () => {}
});

const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const OpeningValue = useMemo(() => ({ open, setOpen }), [open]);
  
  return (
    <Navbar>
    <OpenContext.Provider value={OpeningValue}>
      <NavItem menu={props.main}>
        <DropdownMenu menu={props.main}></DropdownMenu>
      </NavItem>
      </OpenContext.Provider>
    </Navbar>
  );
}

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-nav">{props.children}</div>
    </nav>
  );
}

const NavItem = (props) => {
  const breadcrumbs = useBreadcrumbs(Path);
  const {open, setOpen} = useContext(OpenContext);
  
  const check = (path) => {
    if (breadcrumbs.length > 1) {return breadcrumbs[1].key.includes(path) ? {borderBottom: 2 + 'px solid red'} : {borderBottom: 2 + 'px solid transparent'};}   
  }
  
  return (
    <div className="nav-item">
      <li style={check(props.menu ? Path[0].path : Path[1].path)} className="icon-button" onMouseDown={() => setOpen(!open)}>
        <span to={props.menu ? Path[0].path : Path[1].path} > {props.menu ? Path[0].breadcrumb : Path[1].breadcrumb} </span>
      </li>

      {open && props.children}
    </div>
  );
}

const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const {open, setOpen} = useContext(OpenContext);
  
  const checkIfClickedOutside = e => {
    if ( dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(!open)
    }
  }

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

    const DropdownItem = (props) => {
      return (
        <li className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
  
          {props.children}
  
        </li>
         );
      }
      
  return (
    <div className="dropdown" style={{ height: menuHeight +30 }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
        {(props.menu ? Path[0].children : Path[1].children).map((item, index) => (
          <DropdownItem goToMenu={item.breadcrumb} key={index}>
          <span className='menu-item-link' to={item.link}>{item.breadcrumb}</span>
          </DropdownItem>
          ))}
        </div>
      </CSSTransition>


      {(props.menu ? Path[0].children : Path[1].children).map((item, index) => (
      <CSSTransition
        in={activeMenu === item.breadcrumb}
        timeout={500}
        key={'main-menu-'+ index}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" >
            <h2>Go back</h2>
          </DropdownItem>
          {item.children.map((item, index) => (
          <DropdownItem  key={'secondary-menu ' + index}>
          <Link onClick={() => setOpen(!open)} className='menu-item-link' to={item.link}>{item.breadcrumb}</Link>
          </DropdownItem>
          ))
        }
        </div>
      </CSSTransition>
        ))}    
    </div>
  );
}

export default DropDown;