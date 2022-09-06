import React from "react";
import HeaderNav from "./header-navigation/header-navigation";
import Style from './header-middle.module.scss';
import HeaderProduct from "./header-product-action/header-product-action";
import LinkCustom from "../../elements/link/link";

const HeaderMiddle = () => {
  return (
    <>
      <div className={Style.headerMiddle}>
        <div className={Style.leftBlock}>
          <div className={Style.headerSearch}>
            <LinkCustom BigRed={true} icon={true}/>
          </div>
          <div className={Style.headerDivider}></div>
          <HeaderNav/>
        </div>
        <div className={Style.rightBlock}>
          <HeaderProduct/>
        </div>
      </div>
    </>
  )
}

export default HeaderMiddle;