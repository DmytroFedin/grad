import { useContext } from "react";
import LinkCustom from "../../../elements/link/link";
import Logo from "../../../elements/logo/logo";
import Select from "../../CustomSelect/select";
import { MobileViewContext } from "../../useContext/useContext";
import Style from './header-info.module.scss';


const HeaderInfo = () => {
  const  { mobileView } = useContext(MobileViewContext);
  return (
    <>
        <div className={Style.headerInfo}>
          <div className={Style.headerLeftBlock}>
            <div className={Style.headerLogo}>
                <Logo/>
            </div>
            {(mobileView.customerWidth < mobileView.tabletWidth)?'':
            <div className={Style.headerLocation}>
              <Select position='1'/>
            </div>}
          </div>
          {(mobileView.customerWidth < mobileView.laptopWidth)?
            ''
            :
            <div className={Style.headerRightBlock}>
              <div className='c-header-info__dealer'>
                <LinkCustom text='Для дилеров'/>
              </div>
              <div className='c-header-info__partner'>
                <LinkCustom text='Become a Partner'/>
              </div>
            </div>
          }
        </div>
        
    </>
  )

}

export default HeaderInfo;