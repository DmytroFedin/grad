import React, { useContext, useState } from "react";
import Icon from "../../../elements/icon/icon";
import AuthPage from "../../../pages/auth/auth";
import { BackendRouteContext, IsAuthContext, LoggedUserContext, RegistrationModalContext } from "../../useContext/useContext";
import Style from './header-login.module.scss'
import Login from "../../../assets/images/login.jpg";
import { logout } from "../../../elements/apiAuth/apiAuth";


const HeaderLogin = (props) => {
  const { open, setOpen } = useContext(RegistrationModalContext);
  const { user, setUser } = useContext(LoggedUserContext);
  const { isAuth, setIsAuth } = useContext(IsAuthContext);
  const [ openBox, setOpenBox ] = useState(false)
  const { backendRoute } = useContext(BackendRouteContext);
  
  return(
    <>
    {props.menuMode? isAuth?
      <div to='/auth' className={`${Style.loginContainer} ${Style.loginContainerMenuMode}`} onClick={() => {setOpen([true, open[1]])}}>
        <div className={`${Style.icon} ${Style.iconMenuMode}`}>
          <img src={Login} alt={'Фото профиля'}/>
        </div>
        <span>{user.email}</span>
      </div>
      :
      <div to='/auth' className={`${Style.loginContainer} ${Style.loginContainerMenuMode}`} onClick={() => {setOpen([true, open[1]])}}>
        <div className={`${Style.icon} ${Style.iconNotLogged}`}>
          <Icon link='#icon-login'/>
        </div>
        <span>Войти</span>
      </div>
      :
      isAuth?
      <div to='/auth' className={`${Style.loginContainer} ${Style.loginContainerLogged}`} onClick={() => {setOpenBox(!openBox)}}>
        <span>{user.email}</span>
        <div className={Style.icon}>
          <img src={Login} alt={'Фото профиля'}/>
        </div>
        {openBox && 
          <div className={Style.cabinetContainer}>
            <span className={Style.cabinetButton} onClick={() => {logout(setUser, setIsAuth, backendRoute, setOpenBox)}}>Выйти</span>
          </div>}
      </div>
      :
      <div to='/auth' className={Style.loginContainer} onClick={() => {setOpen([true, open[1]])}}>
        <span>Войти</span>
        <div className={`${Style.icon} ${Style.iconNotLogged}`}>
          <Icon link='#icon-login'/>
        </div>
      </div>
    }
    
    {open[0] &&
      <AuthPage login={true}  />
      }
    {open[1] &&
    <AuthPage login={false} />
    }
    </>
  )
}


export default HeaderLogin