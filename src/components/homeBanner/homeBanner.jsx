import React, { useContext, useEffect, useState } from 'react';
import Style from './homeBanner.module.scss'
import { Navigation} from 'swiper';
import Slide1 from '../../assets/images/banner.jpg'


import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import LinkCustom from '../../elements/link/link';
import { BackendRouteContext } from '../useContext/useContext';


const Banner = (props) => {
  const { backendRoute } = useContext(BackendRouteContext);
  const [toggle, setToggle] = useState()
  
  useEffect(() => { 
    fetch()
  },[]);

  const fetch = async (e) => {
  setToggle('promotion')
  const response = await axios.get(`https://grad-backend-server.herokuapp.com/api/promotion`)
  const result = JSON.parse(response.request.response)
  setResult(result.data)
}
  const [result, setResult] = useState([])

  const newest = async (e) => {
    setToggle('newest')
    const response = await axios.get(`${backendRoute}api/new`)
    const result = JSON.parse(response.request.response)
    setResult(result.data)
  }

  const favotite = async (e) => {
    setToggle('favorite')
    const response = await axios.get(`${backendRoute}api/favorites`)
    const result = JSON.parse(response.request.response)
    setResult(result.data)
  }

  return (
    <div className={props.PromotionMode? Style.container:Style.width}>
{(props.PromotionMode)?<div className={Style.tabs}>
      <span className={(toggle === 'promotion')?`${Style.tab} ${Style.emphasized}`: Style.tab} onClick={fetch}>Акция</span>
      <span className={(toggle === 'newest')?`${Style.tab} ${Style.emphasized}`: Style.tab} onClick={newest}>Новинки</span>
      <span className={(toggle === 'favorite')?`${Style.tab} ${Style.emphasized}`: Style.tab} onClick={favotite}>Мы рекомендуем</span>
    </div>:''}
    <Swiper className={(props.PromotionMode)?`${Style.slider} ${Style.sliderSmaller}`:Style.slider}
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      allowTouchMove={false}
      resizeObserver={false}
      slidesPerView={(props.PromotionMode)?1:1}
      breakpoints={{
                1540: { slidesPerView: props.PromotionMode?5:1},
                1250: { slidesPerView: props.PromotionMode?4:1},
                940: { slidesPerView: props.PromotionMode?3:1},
                640: { slidesPerView: props.PromotionMode?2:1},
              }}
      navigation
      onSwiper={(swiper) => {
       const prev = swiper.navigation.prevEl;
       const next = swiper.navigation.nextEl;
       const wrapper = swiper["$wrapperEl"][0];
       next.classList.add(Style.slideBtn) 
       next.classList.add(Style.slideBtnNext) 
       prev.classList.add(Style.slideBtn)
       prev.classList.add(Style.slideBtnPrev)
       if (props.PromotionMode) {
        wrapper.classList.add(Style.wrapper)
        next.classList.add(Style.slideBtnNextPromotion) 
        prev.classList.add(Style.slideBtnPrevPromotion) 
       }}
       }
      
    >
    {(props.PromotionMode)? result.map((item, index) => (
      <SwiperSlide key = {index}>
        <ProductItem view={'full'} category={item.category} subcategory={item.subcategory} productId={item._id} opacityMode={index === 4} PromotionMode={true} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>
      </SwiperSlide>
        )) :
      <>
      <SwiperSlide>
          <div className={Style.slide}>
            <img src={Slide1} alt=''></img>
          </div>
          <div className={Style.bannerText}>
            <span className={Style.bannerTitle}>Zero Runner</span>
            <span className={Style.bannerBody}>Бег с нулевой</span>
            <span className={Style.bannerBody}>ударной</span>
            <span className={Style.bannerBody}>нагрузкой</span>
            <span className={Style.bannerSub}>на суставы</span>
            <button className={Style.bannerBtn}>
              <span>Узнайте больше</span>
            </button>
          </div>
        </SwiperSlide><SwiperSlide>slide2</SwiperSlide></>

    }
    </Swiper>
    {(props.PromotionMode)?
    <div className={Style.btn}>
    <LinkCustom redBorderEmptyMode={true} text={'Все категории'} />
    </div> : ''}

    </div>
  );
};

export default Banner;