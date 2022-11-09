import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import HeaderNav from '../../components/header-middle/header-navigation/header-navigation'
import HeaderLogin from '../../components/header-top/header-login/header-login'
import { BackendRouteContext, IsAuthContext, LoggedUserContext, RegistrationModalContext } from '../../components/useContext/useContext'
import AuthPage from '../../pages/auth/auth'
import { logout } from '../apiAuth/apiAuth'
import { checkIfClickedOutside } from '../checkOutsideClick/checkOutsideClick'
import DealerBtns from '../dealerBtns/dealerBtns'
import Style from './burgerMenu.module.scss'

const BurgerMenu = () => {
  const [active, setActive] = useState(false)
  const { open, setOpen } = useContext(RegistrationModalContext);
  const { isAuth, setIsAuth } = useContext(IsAuthContext);
  const { backendRoute } = useContext(BackendRouteContext);
  const { setUser } = useContext(LoggedUserContext);
  const InsideClickRef = useRef(null);
  const closeBtn = useRef(null);
  
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {checkIfClickedOutside(e, InsideClickRef, setOpen)})
    return () => {
      document.removeEventListener("mousedown", (e) => {checkIfClickedOutside(e, InsideClickRef, setOpen)})
    }
  }, [active])


  return (
    <>
      <div className={active?`${Style.menu} ${Style.active}`:Style.menu} onClick={() => setActive(!active)} ref={closeBtn}>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
      </div>
      <div className={active ?`${Style.showupContainer} ${Style.showupContainerActive}`:`${Style.showupContainer}`} ref={InsideClickRef}>
        <div className={Style.wrapper}>
          <HeaderLogin open={active} setOpen={setActive} menuMode={true}/>
          <hr/>
          <HeaderNav burgerMenu={true}/>
          <hr/>
          <DealerBtns columnMode={true}/>
          {isAuth &&
          <div onClick={()=>{logout(setUser, setIsAuth, backendRoute)}}>Выйти</div>
          }
        </div>
      </div>
      {open[0] &&
      <AuthPage login={true} open={open[0]}  setOpen={setOpen}/>
      }
      {open[1] &&
      <AuthPage login={false} open={open[1]}  setOpen={setOpen}/>
      }
    </>
  )
}

export default BurgerMenu