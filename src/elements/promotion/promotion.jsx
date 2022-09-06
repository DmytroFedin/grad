import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";

const Promotion = () => {
  const [result, setResult] = useState([])
  useEffect(() => {  
    // fetch()
  },[]);
    const fetch = async (e) => {

    const response = await axios.get('/api/promotion')
    const result = JSON.parse(response.request.response)
    setResult(result.data)
  }

  return (
    <>
      { result.map(item => (
        <ProductItem title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>
        ))}
    </>
  )
}

export default Promotion;