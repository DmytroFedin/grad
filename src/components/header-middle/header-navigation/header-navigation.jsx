import React from "react";
import LinkCustom from "../../../elements/link/link";
import Style from './header-navigation.module.scss'

const HeaderNav = (props) => {

  const links = [
    'Бренды',
    'Сервис',
    'Услуги',
    'Поддержка',
    'О компании',
    'Блог',
    'Где купить',
    'Контакты',
  ];


  return (
    <>
      <div className={props.burgerMenu?`${Style.headerNav} ${Style.headerNavColumn}`:`${Style.headerNav}`}>
      {links.map((option, index) => (
                <LinkCustom  key={index} text={option}/>
              ))}
      </div>
    </>
  )
}

export default HeaderNav