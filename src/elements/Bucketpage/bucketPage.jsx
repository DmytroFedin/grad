import React from "react";
import Style from './bucketPage.module.scss'
import { useCart } from "../../components/useContext/cartContext";
import ProductItem from "../../components/ProductItem/ProductItem";

const BucketPage1 = (product) => {
  let localBucket = JSON.parse(localStorage.getItem('product'));
  // const [cart, setCart] = useState()
  useCart()

//   const FetchComments = async (e)=>{
//     const cart = localBucket.map((item) => {return item.id})
//     console.log(cart);
//     await axios.get('/api/cart/' + cart).then((response) => {
//      // setProducts(response.request.response)
//      // parentCallback(response.request.response);
//      console.log(response.request.response);
//     //  const result = JSON.parse(response.request.response)
//     //  const data = [];
//     //  result.data.map((item, index) => (
//     //    data.push(<ProductItem key={index} productId={item._id} discountMode={false} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>)
//     //    )) 
      
//     //  setProducts(data);

//    })
// }
  // FetchComments()
  return (
    <>
      <div className={(localBucket && localBucket.length !==0)?Style.container:Style.empty}>
        {(localBucket && localBucket.length !==0)?localBucket.map((item, index) => (
          <ProductItem yearsGuarantee={item.yearsGuarantee} additionalGuarantee={item.additionalGuarantee} guaranteePrice={item.guaranteePrice} sum={item.sum} maxQuantity={item.maxQuantity} index={index} cart={true} product={item.product} shortening={true} view='full' category={item.category} subcategory={item.subcategory} key={index} productId={item._id} discountMode={false} title={item.title} rating={item.rating} poster={item.poster} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>
           
        )):'Корзина пуста'}
      </div>
    </>
  )
}

export default BucketPage1;