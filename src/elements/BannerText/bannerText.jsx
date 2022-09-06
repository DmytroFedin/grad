import React from 'react';
import LinkCustom from '../link/link';
import Style from './bannerText.module.scss'


const BannerText = (props) => {

  return (
    <>
    {(props.logoMode)?
      <div className={`${Style.bannerText} ${Style.bannerTextWithLogo}`}>
          <div className={Style.bannerLogo}>
            <img src={props.image} alt=''/>
          </div>
          <span className={Style.bannerBodyLogoMode}>{props.boldText} </span>
          <span className={Style.bannerSubLogoMode}>{props.normalText}</span>
          <LinkCustom BigRed={true} bannerMode={true} text='Подробнее' />
    </div>:
    <div className={Style.bannerText}>
          <span className={Style.bannerTitle}>Zero Runner</span>
          <span className={Style.bannerBody}>Бег с нулевой ударной нагрузкой </span>
          <span className={Style.bannerSub}>на суставы</span>
          <LinkCustom  text={'Узнайте больше'} className={Style.bannerBtn} />
    </div>
    }
  </>
  )
}

export default BannerText