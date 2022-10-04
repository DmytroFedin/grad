import React, { useContext } from "react";
import Style from './footerTop.module.scss';
import LinkCustom from "../../../elements/link/link";
import { MobileViewContext } from "../../useContext/useContext";
import FooterContacts from "./footerContacts/footerContacts";

const FooterTop = () => {
  const  { mobileView } = useContext(MobileViewContext);
  
  const links = [{
    title: 'Каталог',
    links: ['Для дома', 'Для фитнес клубов', 'Акции', 'Идеи и подборки', 'Новинки', 'Наши бренды']
  },{
    title: 'Поддержка',
    links: ['Доставка и оплата', 'Условия возврата', 'Сервисная заявка', 'Обслуживание фитнес клубов', 'FAQ', 'Инструкции', 'Гарантия']
  },{
    title: 'Услуги',
    links: ['3D проект', 'Консалтинг', 'Бизнес планирование ', 'Лизинг', 'Trade-IN', 'В рассрочку']
  },{
    title: 'О компании',
    links: ['О нас', 'Наша миссия', 'Наша команда ', 'Наши проекты', 'Новости', 'Блог', 'Где купить', 'Контакты']
  }]
  return (
    <>
    <div className={Style.container}>
      <div className={Style.links}>
    {links.map((link, index) => (
        <div className={Style.linksSection} key={index}>
          <span className={Style.title}>{link.title}</span>
          <div className={Style.wrapper}>
          {link.links.map((item, index) => (
            <LinkCustom text={item} key={index} href='.'/>
          ))}
          </div>
        </div> 
    ))}
      </div>
    {(mobileView.customerWidth < mobileView.laptopWidth)?'':<FooterContacts/>}
      </div>
    </>
  )
}

export default FooterTop;