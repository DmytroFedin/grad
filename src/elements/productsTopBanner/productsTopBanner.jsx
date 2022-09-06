import React from 'react';
import BannerText from '../BannerText/bannerText';
import Style from './productsTopBanner.module.scss'
import logo from '../../assets/images/NautilusLogo.png'

const ProductsTopBanner = (props) => {

  return (
    <div className={Style.container}>
      <img src={props.img} alt=''></img>
      <BannerText logoMode={true} image={logo} boldText='БЕГОВАЯ ДОРОЖКА' normalText='для подготовки к марафону' buttonText='Подробнее'/>
    </div>
  )

}

export default ProductsTopBanner