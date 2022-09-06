import { useEffect, useRef, useState } from 'react'
import HeaderNav from '../../components/header-middle/header-navigation/header-navigation'
import HeaderLogin from '../../components/header-top/header-login/header-login'
import DealerBtns from '../dealerBtns/dealerBtns'
import Style from './burgerMenu.module.scss'

const BurgerMenu = () => {
  const [active, setActive] = useState(false)

  const dropdownRef = useRef(null);
  const closeBtn = useRef(null);
  
  const checkIfClickedOutside = e => {
    if ( dropdownRef.current && !dropdownRef.current.contains(e.target) && !closeBtn.current.contains(e.target)) {
      setActive(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [active])


  return (
    <>
      <div className={active?`${Style.menu} ${Style.active}`:Style.menu} onClick={() => setActive(!active)} ref={closeBtn}>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
      </div>
      <div className={active ?`${Style.showupContainer} ${Style.showupContainerActive}`:`${Style.showupContainer}`} ref={dropdownRef}>
        <div className={Style.wrapper}>
          <HeaderLogin menuMode={true}/>
          <hr/>
          <HeaderNav burgerMenu={true}/>
          <hr/>
          <DealerBtns columnMode={true}/>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu