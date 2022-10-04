import { useContext } from "react";
import Icon from "../../../elements/icon/icon";
import Bucket from "../../bucket/bucket";
import { MobileViewContext } from "../../useContext/useContext";
import Style from './header-product-action.module.scss'

const HeaderProduct = () => {
  const  { mobileView } = useContext(MobileViewContext);

  return(
    <>
      <nav>
        <ul className={Style.navList}>
    {(mobileView.customerWidth <= mobileView.mobileWidth)?''
    :
        <>
          <li className={Style.navItem}>
            <Icon link='#icon-compare'/>
          </li>
          <li className={Style.navItem}>
            <Icon link='#icon-like'/>
          </li>
        </>
    }
          <li className={Style.navItem}>
            <Bucket/>
          </li>
          </ul>
      </nav>
    </>
  )
}

export default HeaderProduct;