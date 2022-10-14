import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../elements/icon/icon";
import AuthPage from "../../../pages/auth/auth";
import { RegistrationModalContext } from "../../useContext/useContext";
import Style from './header-login.module.scss'


const HeaderLogin = (props) => {
  const [ openModal, setOpenModal ] = useState(false);
  const { open, setOpen } = useContext(RegistrationModalContext);
  console.log(open);
  
  return(
    <>
    {props.menuMode?
      <div to='/auth' className={props.menuMode?`${Style.loginContainer} ${Style.loginContainerMenuMode}`:Style.loginContainer} onClick={() => {setOpenModal(!open)}}>
        <div className={Style.icon}>
          <Icon link='#icon-login'/>
        </div>
        <span>Войти</span>
      </div>
      :
      <div to='/auth' className={Style.loginContainer} onClick={() => {setOpenModal(!open)}}>
        <span>Войти</span>
        <div className={Style.icon}>
          <Icon link='#icon-login'/>
        </div>
      </div>
    }
      {openModal &&
      <AuthPage login={true} open={openModal}  setOpen={setOpenModal}/>
      }
      {open &&
      <AuthPage login={false} open={open}  setOpen={setOpen}/>
      }
    </>
  )
}


export default HeaderLogin