import React from 'react';
import Style from './ideasBanner.module.scss';
import image1 from '../../assets/images/Ideas__1.jpg';
import image2 from '../../assets/images/Ideas__2.jpg';
import image3 from '../../assets/images/Ideas__3.jpg';
import LinkCustom from '../../elements/link/link';

const IdeasBanner = () => {
  return(
    <div className={Style.BannerBody}>
      <div className={Style.BannerValues}>
        <h2 className={Style.BannerTitle}>Идеи и подборки</h2>
        <div className={Style.BannerImages}>
          <div className={Style.BannerImage}>
            <img src={image1} alt=''/>
          </div>
          <div className={Style.BannerImage}>
          <img src={image2} alt=''/>
          </div>
          <div className={Style.BannerImage}>
          <img src={image3} alt=''/>
          </div>
        </div>
        <LinkCustom redBorderEmptyMode={true} text={'Полная подборка'} />
      </div>
    </div>
  )
}
export default IdeasBanner