import Style from "./productItem.module.scss";
import React, { useContext, useState } from "react";
import TopBar from "../../elements/productTopBar/productTopBar";
import Availabilty from "../../elements/availability.jsx/availability";
import Rating from "../../elements/rating/rating";
import { Link } from "react-router-dom";
import {
  createSignal,
  partitionByKey,
  combineKeys,
  mergeWithKey,
} from "@react-rxjs/utils";
import { useDispatchCart } from "../useContext/cartContext";
import Path from "../routes/menuItem";
import LinkCustom from "../../elements/link/link";
import { MobileViewContext } from "../useContext/useContext";


const ProductItem = (props) => {
  const [bucket$, addBucket] = createSignal();
  const dispatch = useDispatchCart();
  const { mobileView, setMobileView } = useContext(MobileViewContext);


  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };


  const buy = (e) => {
    e.preventDefault();
    if (!localStorage.product) {
      localStorage.setItem("product", JSON.stringify([]));
    }
    const price = props.price;
    const quantity = 1;
    const img = props.poster;
    const title = props.title;
    const sum = quantity * price;
    const maxQuantity = props.quantity;
    const id = props.productId;
    class bucketItem {
      constructor(title, price, quantity, img, sum, maxQuantity, id) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.img = img;
        this.sum = sum;
        this.maxQuantity = maxQuantity;
        this.id = id;
      }
    }
    if (maxQuantity === null) {
    } else {
      const buyingCount = new bucketItem(
        title,
        price,
        quantity,
        img,
        sum,
        maxQuantity,
        id
      );
      addToCart(buyingCount);
    }
  };
  if (!localStorage.product) {
    localStorage.setItem("product", JSON.stringify([]));
  };
  // const Categories = [
  //   {
  //     id: 1,
  //     title: 'Gym-equipment',
  //     content:[
  //       {
  //         id: 1.1,
  //         title: 'Exercycle'
  //       }
  //   ]
  //   }
  // ]
  
  let same = ''
  Path.map((item) => {
    if(props.category === item.id) {
      // console.log('first');
        item.children.map((item)=>{
          if(props.subcategory === item.subId) {
            console.log('second');
            return same = item.path
          }
          else if(!(props.subcategory === item.subId)) {
            item.children.map((item)=>{
              if(props.subcategory === item.subId) {
                console.log('third');
                return same = item.link
              }
            })
          }
        })
      
    }

  })

  const checkQuantity = () => {
    return (props.quantity === 0)?true:false;
  }

  return (
    <>
      {props.view === "full" ? (
        <Link to={`${same}/${props.title} ${props.productId}`}
          className={
            props.discountMode
              ? `${Style.searchResult} ${Style.searchResultOpacity}`
              : Style.searchResult
          }
        >
          <div className={Style.imageWrapper}>
            <div className={Style.topBar}>
              <TopBar />
            </div>
            <div className={Style.img}>
              <img src={props.poster} alt=""></img>
            </div>
          </div>
          <div className={Style.description}>
            <div className={Style.availability}>
              <div className={Style.quantity}>
                <Availabilty quantity={props.quantity} />
              </div>
              <span className={Style.status}>
                {props.availability ? "Есть в шоу-руме" : "Скоро ожидается"}
              </span>
            </div>
            <span className={Style.name}>{props.title}</span>
            {(props.shortening && mobileView.customerWidth < mobileView.tabletWidth)?
            <div className={`${Style.characteristics} ${Style.heightAdj}`}>
              <span className={Style.static}>Производитель: </span>
              <span className={Style.dynamic}>{props.manufacturer}</span>
            </div>:
            <>
            <div className={Style.characteristics}>
              <span className={Style.static}>Тип дорожки: </span>
              <span className={Style.dynamic}>{props.type}</span>
            </div>
            <div className={Style.characteristics}>
              <span className={Style.static}>Бег.полотно: </span>
              <span className={Style.dynamic}>{props.runningBeltLength}</span>
            </div>
            <div className={Style.characteristics}>
              <span className={Style.static}>Мощность двигателя: </span>
              <span className={Style.dynamic}>{props.engine}</span>
            </div>
            <div className={Style.characteristics}>
              <span className={Style.static}>Беговое полотно: </span>
              <span className={Style.dynamic}>{props.runningBeltType}</span>
            </div>
            <div className={Style.characteristics}>
              <span className={Style.static}>Производитель: </span>
              <span className={Style.dynamic}>{props.manufacturer}</span>
            </div>
            <div className={Style.rating}>
              <Rating rating={props.rating} />
            </div>
            </>
            }
            <div className={Style.PriceAndButton}>
              <div className={Style.price}>
                <span>{props.price}</span>
                <span className={Style.line}>
                  {(props.price / 0.95).toFixed(2)}
                </span>
              </div>
              <div>
                <LinkCustom disabled={checkQuantity()} BigRed={true} icon={false} click={(e) => {buy(e)}} />
              </div>
            </div>
          </div>
        </Link>
      ) : (
        
        <Link onClick={props.exec} to={`${same}/${props.title} ${props.productId}`} className={Style.autocomplete}>
          <span className={Style.name}>{props.title}</span>
          <div className={Style.characteristics}>
            <span className={Style.static}>Производитель </span>
            <span className={Style.dynamic}>{props.manufacturer}</span>
          </div>
          <div className={Style.imgSmaller}>
            <img src={props.poster} alt=""></img>
          </div>
          <div className={Style.rating}>
            <Rating rating={props.rating} />
          </div>
        </Link>
      )}
    </>
  );
};

export default ProductItem;
