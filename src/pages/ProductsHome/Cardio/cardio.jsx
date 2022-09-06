import React from "react";
import { BreadcrumbsSection } from "../../../components/breadCrumps1/breadCrumps1";
import ProductsTopBanner from "../../../elements/productsTopBanner/productsTopBanner";
import banner from '../../../assets/images/CardioBanner.jpg'


const CardioH = () => {
  return (
    <div className='wrapper'>
       <BreadcrumbsSection/>
       <ProductsTopBanner img={banner} />
    </div>
  );
};

export default CardioH;
