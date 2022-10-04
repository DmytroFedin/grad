import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart, useDispatchCart } from "../../components/useContext/cartContext";
import BucketPage1 from "../../elements/Bucketpage/bucketPage";
import Counter from "../../elements/counter/counter";
import LinkCustom from "../../elements/link/link";
import Style from "./bucketPage.module.scss"


const BucketPage = () => {
  const [ year, setYear ] = useState([{0:1},{0:1}]);
  const [ guaranteeQuantity, setguaranteeQuantity] = useState([{0:1},{0:1}]);
  const [ guaranteePrice, setGuaranteePrice] = useState(1000);
  const [ totalSum, settotalSum ] = useState();
  const [ step, setStep] = useState(true);
  const [ inCart, setInCart] = useState(true);
  const [ totalQuantity, setTotalQuantity ] = useState();
  const localBucket = JSON.parse(localStorage.getItem('product'));
  const dispatch = useDispatchCart();
  let total = 0;
  let quantity = 0;
  useCart()

  const gatherYears = (e, index) => {
    let updatedList = [...year];
    if (e.target.firstChild.nodeValue === '+') {
      const action = {[index]:(year[index][index] < 5)?year[index][index] + 1:5}
      updatedList.splice(index, 1, action);
    }
    else {
      updatedList.splice(index, 1, {[index]:(year[index][index] > 1)?year[index][index] - 1:1});
    }
    setYear(updatedList);
  }

  const gatherQuantity = (e, index, maxQuantity) => {
    let updatedList = [...guaranteeQuantity];
    if (maxQuantity === 0) {

    }
    else {
      if (e.target.firstChild.nodeValue === '+') {
        const action = {[index]:(guaranteeQuantity[index][index] < maxQuantity)?guaranteeQuantity[index][index] + 1:maxQuantity}
        updatedList.splice(index, 1, action);
      }
      else {
        updatedList.splice(index, 1, {[index]:(guaranteeQuantity[index][index] > 1)?guaranteeQuantity[index][index] - 1:1});
      }
      setguaranteeQuantity(updatedList);
    }
  }

  const addGuarantee = (item, index) => {
    item.guaranteePrice = guaranteePrice
    const sumYears = item.additionalGuarantee;
    let yearsNumber = 0;
    if (year[index][index] === 5) {
      item.additionalGuarantee += guaranteeQuantity[index][index];
      item.yearsGuarantee[4] += guaranteeQuantity[index][index];
      yearsNumber = 5;
    }
    else if (year[index][index] === 4) {
      item.additionalGuarantee += guaranteeQuantity[index][index];
      item.yearsGuarantee[3] += guaranteeQuantity[index][index];
      yearsNumber = 4;
    }
    else if (year[index][index] === 3) {
      item.additionalGuarantee += guaranteeQuantity[index][index];
      item.yearsGuarantee[2] += guaranteeQuantity[index][index];
      yearsNumber = 3;
    }
    else if (year[index][index] === 2) {
      item.additionalGuarantee += guaranteeQuantity[index][index];
      item.yearsGuarantee[1] += guaranteeQuantity[index][index];
      yearsNumber = 2;
    }
    else if (year[index][index] === 1) {
      item.additionalGuarantee += guaranteeQuantity[index][index];
      item.yearsGuarantee[0] += guaranteeQuantity[index][index];
      yearsNumber = 1;
    }
    if (item.additionalGuarantee > item.quantity || sumYears > item.quantity) {
      item.additionalGuarantee = item.quantity
      addToCart(item, true, yearsNumber)
    }
    else {
      addToCart(item, true, yearsNumber)
    }
  }

  const addToCart = (item, guarantee, index) => {
    dispatch({ type: "ADD", item, guarantee, index });
  };

  useEffect(()=> {
    for( var i = 0; i < localBucket.length; i++){
      total += localBucket[i].sum; 
      quantity += localBucket[i].quantity;
    }
    settotalSum(total);
    setTotalQuantity(quantity);

  },[localBucket])

  useEffect(()=> {
    let list = [];
    for( var i = 0; i < localBucket.length; i++){
      list.push({[i]:1});
    }
    setguaranteeQuantity(list);
    setYear(list);
  },[])
  
  return (
    <div className={`${Style.content} wrapper`}>
      <div>
        <div className={Style.mainHeading}>Моя Корзина</div>
      </div>
      <hr className={Style.hr} />
      <div>
        <div className={Style.stageBtn}>
          <span onClick={() => {setStep(true)}} className={`${Style.step} ${step?'':Style.notActiveStep}`}>
            Шаг 1
          </span>
          <span className={Style.verticalLine}/>
          <span onClick={() => {setStep(false)}} className={`${Style.step} ${step?Style.notActiveStep:''}`}>
            Шаг 2
          </span>
        </div>
        <div className={Style.productAndTotal}>
          <div className={Style.bucketSelectionBtn}>
          {inCart?
            <LinkCustom to={'/cart'} BigRed={true} bannerMode={true} text={'В Корзине'} /> :
            <div className={Style.tab} onClick={() => {setInCart(true)}}>
              В Корзине
            </div>
          }
          {inCart?
            <div className={Style.tab} onClick={() => {setInCart(false)}}>
              Избранное
            </div>
             :
             <LinkCustom to={'/cart'} BigRed={true} bannerMode={true} text={'Избранное'} />
          }
          </div>
          <div className={Style.productService}>
            <BucketPage1/>
            <div className={Style.guaranteeBlock}>
              <div className={Style.guaranteeHeading}>
                <p className={Style.heading}>Дополнительная гарантия до 5 лет</p>
                <div className={Style.grayText}>
                Хотите быть полностью уверены в новом товаре? <div className={Style.grayTextArticle}>Оформите Дополнительную гарантию на срок до 5 лет. Она начнет действовать сразу после истечения основного срока гарантии. <a href='./'>Подробнее</a> </div></div>
                <div>
                  <p className={Style.grayText}>1 000 ₽ / 1 год</p>
                </div>
              </div>
              {(localBucket && localBucket.length !==0)?localBucket.map((item, index) => (
                <div key={index} className={Style.guaranteeItem}>
                  <div className={Style.guaranteeItemWrapper}>
                      <div className={Style.productName}>Беговая дорожка {item.title}</div>
                    <div className={Style.counter}>
                    <Counter index={index} grayStyle={true} plus={gatherYears} minus={gatherYears} quantity={year[index]?.[index]} />
                    <Counter index={index} grayStyle={true} quantityMode={true} plus={gatherQuantity} minus={gatherQuantity} quantity={guaranteeQuantity[index]?.[index]} maxQuantity={(item.quantity - item.additionalGuarantee)} />
                    </div>
                    <button className={Style.addBtn} disabled={((item.quantity - item.additionalGuarantee) === 0)?true:false} onClick={()=>{addGuarantee(item, index)}}>Добавить</button>
                  </div>
                <p className={`${Style.grayText} ${Style.grayTextArticle}`}>Артикул 12345678</p>
                </div>
              )):''}
            </div>
          </div>
          <div className={Style.totals}>
            <div className={Style.totalsHeading}>
              <div className={Style.totalSum}>
                <span className={Style.sumItem}>Итого</span>
                <span className={Style.sumItem}>{totalSum}</span>
              </div>
              <hr/>
              <div className={Style.totalQuantity}>
                <div className={Style.quantity}>
                  <span className={Style.quantityItem}>Товары, {totalQuantity} шт.</span>
                  <span className={Style.quantityItem}>{totalSum}</span>
                </div>
                <div className={Style.quantity}>
                  <span className={Style.quantityItem}>Скидка</span>
                  <span className={Style.quantityItem}>- 20.00</span>
                </div>
              </div>
              <hr className={Style.totalsHeadingHr}/>
            </div>
            <div className={Style.totalsBtns}>
              <LinkCustom to={'/cart'} cartMode={true} BigRed={true} bannerMode={true} text={'Перейти к оформлению'} />
              <LinkCustom to={'/cart'} redBorderEmptyMode={true} text={'Купить в 1 клик'} />
              <LinkCustom to={'/cart'} Bigger={true} redBorderEmptyMode={true} text={'Сделать коммерческое предложение'} />
            </div>
            <div className={Style.bonusBox}>
              <input type={'checkbox'}/>
              <div>Использовать бонусные баллы<br/>Требуется <Link to={'/auth'} >авторизация</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BucketPage;