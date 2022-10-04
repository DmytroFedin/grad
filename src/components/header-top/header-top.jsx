import React, { useContext } from "react";
import HeaderContact from "./header-contact/header-contact";
import HeaderLogin from "./header-login/header-login";
import HeaderInfo from "./header__info/header__info";
import Style from './header-top.module.scss';
import { MobileViewContext } from "../useContext/useContext";
import BurgerMenu from "../../elements/burger-menu/burgerMenu";
import HeaderProduct from "../header-middle/header-product-action/header-product-action";

const HeaderTop = () => {
  const  { mobileView } = useContext(MobileViewContext);
  return (
    <>
      <div className={Style.headerTop}>
        <HeaderInfo/>
        {(mobileView.customerWidth < mobileView.tabletWidth)?'':<div className={Style.headerDivider}></div>}
        {(mobileView.customerWidth < mobileView.laptopWidth)?<HeaderProduct/>:<HeaderContact/>}
        <div className={Style.headerDivider}></div>
        
        {(mobileView.customerWidth < mobileView.laptopWidth)?<BurgerMenu/>:<HeaderLogin/>}
      </div>
    </>
  )
}
export default HeaderTop;