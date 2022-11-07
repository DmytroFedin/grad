import React, { useContext } from "react";
import Icon from "../../../elements/icon/icon";
import AuthPage from "../../../pages/auth/auth";
import { IsAuthContext, LoggedUserContext, RegistrationModalContext } from "../../useContext/useContext";
import Style from './header-login.module.scss'
import Login from "../../../assets/images/login.jpg";


const HeaderLogin = (props) => {
  const { open, setOpen } = useContext(RegistrationModalContext);
  const { user } = useContext(LoggedUserContext);
  const { isAuth } = useContext(IsAuthContext);
  
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
      <div to='/auth' className={`${Style.loginContainer} ${Style.loginContainerLogged}` } onClick={() => {setOpen([true, open[1]])}}>
        <span>{user.email}</span>
        <div className={Style.icon}>
          <img src={Login} alt={'Фото профиля'}/>
        </div>
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