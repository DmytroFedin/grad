import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Style from './brends.module.scss' 

const Brends = () => {
  const [brands, setBrands] = useState();
  useEffect (() => {
    FetchBrends()
  },[])
  
  const FetchBrends = async ()=>{
    await axios.get('/api/brends').then((response) => {
      
      const result = JSON.parse(response.request.response)
      setBrands(result.data)
    })   
  }

  return (
    <div className={Style.brandsContainer}>
      <h2>Популярные бренды</h2>
      <div className={Style.brandNames}>
        <span>Беговые дорожки</span>
        <span>Эллиптические тренажеры</span>
        <span>Велотренажеры</span>
        <span>Силовые тренажеры</span>
        <span>Батуты</span>
        <span>Игровые столы</span>
      </div>
      <div className={Style.brandsLogo}>
        {brands?brands.map((brand,index)=>{
         return <div key={index} className={Style.brand}><img className={Style.logo} src={brand.logo} alt={brand.name} /></div>
        }):''}
      </div>
      <div></div>
    </div>
  )
}

export default Brends