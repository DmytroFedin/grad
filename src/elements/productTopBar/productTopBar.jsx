import React from "react";
import Icon from "../icon/icon";
import Style from './productTopBar.module.scss'

const TopBar = () => {
  const left = ['#icon-Discount', '#icon-Like', '#icon-New']
  const right = ['#icon-Diagram', '#icon-Heart']
  return(
    <>
      <div className={Style.left}>
      {left.map((item, index) => (
        <div key = {'ключ' + index} className={Style.leftIconWrapper}>
        <Icon link={item}/>
        </div>
      ))}
      </div>
      <div className={Style.right}>
      {right.map((item, index) => (
        <div key = {index} className={Style.rightIconWrapper}>
        <Icon link={item}/>
        </div>
      ))}
      </div>
    </>
  )
}

export default TopBar