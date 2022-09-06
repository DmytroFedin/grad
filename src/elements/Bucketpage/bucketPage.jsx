import React, { useContext, useState } from "react";
import Style from './bucketPage.module.scss'
import { useCart, useDispatchCart } from "../../components/useContext/cartContext";
import axios from "axios";

const BucketPage = (product) => {
  const dispatch = useDispatchCart();
  let localBucket = JSON.parse(localStorage.getItem('product'));
  const [cart, setCart] = useState()
  const item = useCart()
  const removeFromCart = (index, quantity) => {
    dispatch({ type: "REMOVE", index, quantity });
  };
  const [value, setValue] = useState(1)
  console.log(value);

  const FetchComments = async (e)=>{
    const cart = localBucket.map((item) => {return item.id})
    console.log(cart);
    await axios.get('/api/cart/' + cart).then((response) => {
     // setProducts(response.request.response)
     // parentCallback(response.request.response);
     console.log(response.request.response);
    //  const result = JSON.parse(response.request.response)
    //  const data = [];
    //  result.data.map((item, index) => (
    //    data.push(<ProductItem key={index} productId={item._id} discountMode={false} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>)
    //    )) 
      
    //  setProducts(data);

   })
}
  FetchComments()
  return (
    <>
      <div className={(localBucket && localBucket.length !==0)?Style.container:Style.empty}>
        {(localBucket && localBucket.length !==0)?localBucket.map((item, index) => (
          <div key={index} className={Style.bucket}>
          <div className={Style.image}>
          <img src={item.img} alt=''></img>
          </div>
          <div className={Style.description}>
          <span>{item.title}</span>
          <span>{item.price}</span>
          <span>{item.quantity}</span>
          <span>{item.sum}</span>
          <input type={'text'} className={Style.input} defaultValue={1} onChange={(target) => {
            target.target.value = target.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
              setValue(target.target.value)
            }}></input>
          <button onClick={() =>removeFromCart(index, Math.abs(value))}>delete</button>
          </div>
          </div>
        )):'Корзина пуста'}
      </div>
    </>
  )
}

export default BucketPage;