import React, { useState } from "react";
import {ReactComponent as Bag} from '../../assets/icons/bucket.svg';
import Style from './bucket.module.scss';
import { useCart } from "../../components/useContext/cartContext";
import { Link } from "react-router-dom";

const Bucket = () => {
  useCart()
  
  if (!localStorage.product) {
    localStorage.setItem('product', JSON.stringify([]));
  }
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
      <Link to={'/cart'} className={Style.container} onClick={() => setOpen(!open)}>
        <Bag/>
        <div className={Style.count}>{(localStorage.product.length !== 0)?itemValue(): '0'}</div>
      </Link>
      {/* {open && <div className={Style.open}>
          <BucketPage1/>
      </div>} */}
    </>
  )
}

export default Bucket;