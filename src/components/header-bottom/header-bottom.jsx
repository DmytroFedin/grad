import React, { useCallback, useContext, useState } from "react";
import Search from "../../search/search";
import DropDown from "../Dropdown/dropdown";
import { MobileViewContext } from "../useContext/useContext";
import Style from './header-bottom.module.scss';

const HeaderBottom = ({ parentCallback }) => {
  const  {mobileView, setMobileView } = useContext(MobileViewContext);

  return (
    <>
      <div className={Style.headerBottom}>
        <div className={Style.wrapper}>
          <div className={Style.dropdown}>
            <DropDown main={true}/>
            <DropDown main={false}/>
          </div>
          {/* {(mobileView.customerWidth < mobileView.tabletWidth)?'': */}
          <div className={Style.search}>
            <Search
              type={'text'}
              />
          </div>
          {/* } */}
        </div>
      </div>
    </>
  )
}

export default HeaderBottom