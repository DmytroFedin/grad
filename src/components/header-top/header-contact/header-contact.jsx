import React from "react";
import LinkCustom from "../../../elements/link/link";
import Select from "../../CustomSelect/select";
import Style from './header-contact.module.scss';
import style from '../header__info/header-info.module.scss';

const HeaderContact = () => {
  return (
    <>
      <div className={Style.headerContact}>
        <div className={Style.headerCallInfo}>
          <span className='c-header-contact__number'>+7 (800) 000-00-00</span>
          <div className={style.headerLocation}>
            <Select position='2' />
          </div>
        </div>
        <div className='c-header-contact__ask-a-call'>
          <LinkCustom text='Заказать звонок' redMode={true}/>
        </div>
      </div>
    </>
  )
};


export default HeaderContact;