import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../elements/icon/icon";
import LinkCustom from "../../../elements/link/link";
import Style from './header-login.module.scss'


const HeaderLogin = (props) => {
  return(
    <>
    {props.menuMode?
      <Link to='/auth' className={props.menuMode?`${Style.loginContainer} ${Style.loginContainerMenuMode}` :Style.loginContainer}>
        <div className={Style.icon}>
          <Icon link='#icon-login'/>
        </div>
        <span>Войти</span>
      </Link>
      :
      <Link to='/auth' className={Style.loginContainer}>
        <span>Войти</span>
        <div className={Style.icon}>
          <Icon link='#icon-login'/>
        </div>
      </Link>
    }
    </>
  )
}


export default HeaderLogin