import { useContext } from 'react'
import DealerBtns from '../../../../elements/dealerBtns/dealerBtns'
import LinkCustom from '../../../../elements/link/link'
import Socials from '../../../../elements/socials/socials'
import { MobileViewContext } from '../../../useContext/useContext'
import Style from './footerContacts.module.scss'

const FooterContacts = (props) => {
  const  {mobileView, setMobileView } = useContext(MobileViewContext);
  return (
      <div className={props.rowMode?`${Style.info} ${Style.infoRow}`:Style.info}>
          {props.rowMode?'':<div className={Style.item}><LinkCustom redBorderEmptyMode={true} text='Подписаться на рассылку' GrayStyle={true} /></div>}
          <div className={Style.item}>
            <div className={Style.itemWrapper}>
              <span>+7 (000) 000-00-00 для Москвы</span>
              <span>8 (800) 000-00-00  для России</span>
              <a href='tel:+7 (000) 000-00-00'>Заказать звонок</a>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.itemWrapper}>
              <span>wellfitness@wellfit.ru</span>
              <a href='mailto:wellfitness@wellfit.ru'>Написать</a>
            </div>
          </div>
          {props.rowMode?<div className={Style.item}><DealerBtns columnMode={true}/></div>:''}
          <div className={Style.item}>
              {props.rowMode?<LinkCustom redBorderEmptyMode={true} text='Подписаться на рассылку' GrayStyle={true} />:''}
            <div className={Style.itemWrapper}>
              <a className={Style.BlueLink} href='.'>Политика конфиденциальности</a>
              <a className={Style.BlueLink}  href='.'>Публичная офферта</a>
            </div>
            {
              (mobileView.customerWidth <= mobileView.mobileWidth)?<Socials />:""
            }
          </div>
        </div>
  )
}

export default FooterContacts