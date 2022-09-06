import React, { useCallback, useContext, useState } from "react";
import Search from "../../search/search";
import DropDown from "../Dropdown/dropdown";
import { MobileViewContext } from "../useContext/useContext";
import Style from './header-bottom.module.scss';

const HeaderBottom = ({ parentCallback }) => {
  const  {mobileView, setMobileView } = useContext(MobileViewContext);
  
  // const [item, setItem] = useState([]);
  // const [products, setProducts] = useState([]);
  // setItem(products)
  // parentCallback(products);

  // const callback = useCallback((products) => {
  //   setProducts(products);
  // }, []);

  return (
    <>
      <div className={Style.headerBottom}>
        <div className={Style.wrapper}>
          <div>
            <DropDown main={true}/>
          </div>
          <div>
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