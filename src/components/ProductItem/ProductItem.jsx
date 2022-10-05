import Style from "./productItem.module.scss";
import React, { useContext, useState } from "react";
import TopBar from "../../elements/productTopBar/productTopBar";
import Availabilty from "../../elements/availability.jsx/availability";
import Rating from "../../elements/rating/rating";
import { Link } from "react-router-dom";
import { useDispatchCart } from "../useContext/cartContext";
// import Path from "../routes/menuItem";
import LinkCustom from "../../elements/link/link";
import { MobileViewContext } from "../useContext/useContext";
import Icon from "../../elements/icon/icon";
import Counter from "../../elements/counter/counter";


const ProductItem = (props) => {
  const dispatch = useDispatchCart();
  const { mobileView } = useContext(MobileViewContext);
  const [value, setValue] = useState(1);

  const removeFromCart = (index, quantity) => {
    dispatch({ type: "REMOVE", index, quantity });
  };

  const addToCart = (item, guarantee, replace, index) => {
    dispatch({ type: "ADD", item, guarantee, replace, index });
  };

  const removeGuarantee = (item, index) => {
    addToCart(item, true, true, index)
  }


  const buy = (e) => {
    e.preventDefault();
    if (!localStorage.product) {
      localStorage.setItem("product", JSON.stringify([]));
    }
    const price = props.price;
    const rating = props.rating
    const quantity = 1;
    const poster = props.poster;
    const title = props.title;
    const sum = quantity * price;
    const maxQuantity = props.quantity;
    const id = props.productId;
    const runningBeltLength = props.runningBeltLength;
    const engine = props.engine;
    const product = props.product;
    const manufacturer = props.manufacturer;
    const runningBeltType = props.runningBeltType;
    const availability = props.availability;
    const additionalGuarantee = props.additionalGuarantee;
    const guaranteePrice = props.guaranteePrice;
    const yearsGuarantee = props.yearsGuarantee;
    class bucketItem {
      constructor(title, price, rating, quantity, poster, sum, maxQuantity, id, runningBeltLength, engine, product, manufacturer, runningBeltType, availability, additionalGuarantee, guaranteePrice, yearsGuarantee) {
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.quantity = quantity;
        this.poster = poster;
        this.sum = sum;
        this.maxQuantity = maxQuantity;
        this.id = id;
        this.runningBeltLength = runningBeltLength;
        this.engine = engine;
        this.product = product;
        this.manufacturer = manufacturer;
        this.runningBeltType = runningBeltType;
        this.availability = availability;
        this.additionalGuarantee = additionalGuarantee;
        this.guaranteePrice = guaranteePrice;
        this.yearsGuarantee = yearsGuarantee;
      }
    }
    if (maxQuantity === null) {
    } else {
      const buyingCount = new bucketItem(
        title,
        price,
        rating,
        quantity,
        poster,
        sum,
        maxQuantity,
        id,
        runningBeltLength,
        engine,
        product,
        manufacturer,
        runningBeltType,
        availability,
        additionalGuarantee,
        guaranteePrice,
        yearsGuarantee
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
  // Path.map((item) => {
  //   if(props.category === item.id) {
  //     // console.log('first');
  //       item.children.map((item)=>{
  //         if(props.subcategory === item.subId) {
  //           console.log('second');
  //           return same = item.path
  //         }
  //         else if(!(props.subcategory === item.subId)) {
  //           item.children.map((item)=>{
  //             if(props.subcategory === item.subId) {
  //               console.log('third');
  //               return same = item.link
  //             }
  //           })
  //         }
  //       })
      
  //   }

  // })

  const checkQuantity = () => {
    return (props.quantity === 0)?true:false;
  }

  return (
    <>
      {props.view === "full" ? props.cart ?
      <div className={Style.bucket}>
            <div className={Style.imageConainer}>
              <div className={Style.image}>
                <img src={props.poster} alt=''></img>
              </div>
              {(mobileView.customerWidth <= 560)? 
              <div className={Style.counterContainer}>
                <Counter index={props.index} grayStyle={false} plus={buy} minus={removeFromCart} value={value} quantity={props.quantity} guaranteeQuantity={props.additionalGuarantee}/>
                <span className={Style.priceCart}>{props.price}</span>
                <span className={Style.priceCart}>{props.sum}</span>
              </div>: ''
              }
            </div>
            <div className={Style.descriptionCart}>
            <div className={Style.mainInfo}>
              <div className={Style.titleCart}>
                <span className={Style.heading}>{`${props.product} ${props.manufacturer} ${props.title}`}</span>
                  <Rating rating={props.rating} />
                  {(mobileView.customerWidth <= mobileView.mobileWidth)? '': 
                  <Availabilty availability={props.availability} quantity={props.maxQuantity} />
                  }
              </div>
              {(mobileView.customerWidth <= 560)? '': 
              <div className={Style.counterContainer}>
                <Counter index={props.index} grayStyle={false} plus={buy} minus={removeFromCart} value={value} quantity={props.quantity} guaranteeQuantity={props.additionalGuarantee}/>
                <span className={Style.priceCart}>{props.price}</span>
                <span className={Style.priceCart}>{props.sum}</span>
              </div>
              }
            {/* <input type={'text'} className={Style.input} defaultValue={1} onChange={(target) => {
              target.target.value = target.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                setValue(target.target.value)
              }}></input> */}
            </div>
            <hr/>
            <div className={Style.additionalInfo}>
            {(props.additionalGuarantee > 0 && mobileView.customerWidth < 500)?
              ''
              :
              <div className={Style.additionalInfoContainer}>
                <div className={Style.additionalInfoItem}>
                  <span>Мощность двигателя</span>
                  <span className={Style.itemDescription}>{props.engine}</span>
                </div>
                <div className={Style.additionalInfoItem}>
                  <span>Размер полотна</span>
                  <span className={Style.itemDescription}>{props.runningBeltLength}</span>
                </div>
                <div className={Style.additionalInfoItem}>
                  <span>Тип полотна</span>
                  <span className={Style.itemDescription}>{props.runningBeltType}</span>
                </div>
              </div>
            }
            <div className={Style.guaranteeContainer}>
                {props.yearsGuarantee.map((item, index) => {
                  if (item > 0 ) {
                   return <div key={index} className={Style.guaranteeDisplay}>
                   {item} шт./{index + 1} {(index + 1 > 1)?(index + 1 === 5)?`лет`:`года`:`год`} доп. гарантии
                   <span onClick={()=>{removeGuarantee(props, index)}} className={Style.cross}>
                     <span className={Style.crossLeft}></span>
                     <span className={Style.crossRight}></span>
                   </span>
                   </div>
                  }
                })
                  }
              </div>
            </div>
            <div className={Style.btnSection}>
              <div className={Style.likedBtn}>
                <div className={Style.heart}>
                <Icon link='#icon-Heart'/>
                </div>
                <span>В избранное</span>
              </div>
              <div className={Style.deleteBtn}>
                <div className={Style.cross}>
                  <span className={Style.crossLeft}></span>
                  <span className={Style.crossRight}></span>
                </div>
                <span onClick={() => removeFromCart(props.index,props.maxQuantity)}>Удалить</span>
              </div>
            </div>
            </div>
          </div>
          :
       (
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
            <Availabilty normalMode={true} availability={props.availability} quantity={props.quantity} />
            <span className={Style.name}>{props.title}</span>
            {(props.shortening && mobileView.customerWidth <= mobileView.tabletWidth)?
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
