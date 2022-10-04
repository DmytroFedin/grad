import React from "react";
import Search from "../../search/search";
import DropDown from "../Dropdown/dropdown";
import Style from './header-bottom.module.scss';

const HeaderBottom = ({ parentCallback }) => {

  return (
    <>
      <div className={Style.headerBottom}>
        <div className={Style.wrapper}>
          <div className={Style.dropdown}>
            <DropDown main={true}/>
            <DropDown main={false}/>
          </div>
          <div className={Style.search}>
            <Search
              type={'text'}
              />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBottom