import React, { useState } from "react";
import {ReactComponent as Bag} from '../../assets/icons/bucket.svg';
import BucketPage from "../../elements/Bucketpage/bucketPage";
import Style from './bucket.module.scss';
import { useCart } from "../../components/useContext/cartContext";

const Bucket = () => {
  if (!localStorage.product) {
    localStorage.setItem('product', JSON.stringify([]));
  }
  const item = useCart()
  const [open, setOpen] = useState(false)
  let localBucket = JSON.parse(localStorage.getItem('product'));
  const itemValue = () =>{
    let totalQuantity = 0
    localBucket.map(item => {
      totalQuantity += item.quantity
      return totalQuantity
    })
    return totalQuantity
  }

  return (
    <>
      <div className={Style.container} onClick={() => setOpen(!open)}>
        <Bag/>
        <div className={Style.count}>{(localStorage.product.length !== 0)?itemValue(): '0'}</div>
      </div>
      {open && <div className={Style.open}>
          <BucketPage/>
      </div>}
    </>
  )
}

export default Bucket;