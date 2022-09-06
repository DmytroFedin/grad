import React from "react";
import style from './icon.module.scss'

const Icon = (props) => {
  return(
    <>
    <div className={style.icon}>
      <svg className={style.iconSvg}>
        <use xlinkHref={props.link}></use>
      </svg>
    </div>
    </>
  )
}

export default Icon