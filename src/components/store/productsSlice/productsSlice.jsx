import axios from 'axios'
import { useContext } from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductItem from '../../ProductItem/ProductItem'
import { LoadingContext } from '../../useContext/useContext'

export const check = (arr, action, obj) => {
  if (obj === true) {
    let sum = 0
    arr.yearsGuarantee.map((item, index) => {
      if (item > 0) {
        return sum += item * (index + 1);
        }
        return 0
      })
      return sum
  }
  else {
    let sum = 0
    arr[action].yearsGuarantee.map((item, index)=> {
      if (item > 0) {
        return sum += item * (index + 1);
        }
        return 0
      })
      return sum
  }
}

export const add = (prod, indexOf, localBucket, action, state) => {
  if (action.guarantee === true) {
    if (action.replace === true) {
      prod.additionalGuarantee = action.item.additionalGuarantee - action.item.yearsGuarantee[action.index]  ;
      prod.yearsGuarantee[action.index] = 0;
      prod.sum = +(action.item.guaranteePrice * check(prod, 0, true) + action.item.quantity * action.item.price).toFixed(2);
      
      state.splice(indexOf, 1, prod);
      localBucket.splice(indexOf, 1, prod);
      localStorage.setItem('product', JSON.stringify(localBucket));
      return [state];
    };
    prod.additionalGuarantee = action.item.additionalGuarantee;
    prod.yearsGuarantee = action.item.yearsGuarantee;
    prod.guaranteePrice = action.item.guaranteePrice;
    prod.sum = +(action.item.guaranteePrice * check(prod, 0, true) + prod.quantity * action.item.price).toFixed(2);

    state.splice(indexOf, 1, prod);
    localBucket.splice(indexOf, 1, prod)
    localStorage.setItem('product', JSON.stringify(localBucket));
    return [state]}
    else {
      if (prod) {
        prod.quantity += action.item.quantity;
        if(prod.quantity >= prod.maxQuantity) {
          prod.quantity = prod.maxQuantity
        }
        prod.sum = +((prod.quantity * action.item.price + action.item.guaranteePrice * action.item.additionalGuarantee * check(localBucket, indexOf)).toFixed(2));
        state.splice(indexOf, 1, prod);
        localBucket.splice(indexOf, 1, prod)
        localStorage.setItem('product', JSON.stringify(localBucket));
        return [state]}
      else {
        const bucketNew = [...localBucket, action.item];
        localStorage.setItem('product', JSON.stringify(bucketNew));
        return [...state, action.item]}
    }
}
export const del = (newArr, action) => {
    newArr.splice(action.index, 1);
    localStorage.setItem('product', JSON.stringify(newArr));
    return newArr;
}


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: [],
    status: 'idle'
  },
  reducers: {
     Add: (state, action) => {
      let localBucket = JSON.parse(localStorage.getItem('product'));
       if (action.guarantee === true) {
         let prod = localBucket.find(prod => prod.title === action.item.title);
         let indexOf = localBucket.indexOf(prod); 
         return add(prod, indexOf, localBucket, action, state)
       }
       if (localBucket.length !==0) {
         let prod = localBucket.find(prod => prod.title === action.item.title);
         let indexOf = localBucket.indexOf(prod); 
         return add(prod, indexOf, localBucket, action, state)
       }
       else {
       let prod = state.find(prod => prod.title === action.item.title);
       let indexOf = state.indexOf(prod);
       return add(prod, indexOf, localBucket, action, state)}
     },
    Remove: (state, action) => {
      let localBucket = JSON.parse(localStorage.getItem('product'));
      const newArr = [...localBucket];
      if (action.quantity === 0 || action.quantity === null){
        return del(newArr, action);
      }
      if(newArr[action.index].quantity > 1) {
        const newQuantity = newArr[action.index].quantity - action.quantity;
        if(newQuantity <= 0){
          return del(newArr, action);
        };
        newArr[action.index].quantity = newQuantity
        newArr[action.index].sum = +((newArr[action.index].quantity * newArr[action.index].price + newArr[action.index].additionalGuarantee * newArr[action.index].guaranteePrice * check(newArr, action.index)).toFixed(2));
        localStorage.setItem('product', JSON.stringify(newArr));
        return newArr
    }
    else return del(newArr, action);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.value = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})


export const { productsLoaded, decrement, incrementByAmount } = productsSlice.actions;


export const fetchProducts = createAsyncThunk('products/productsLoading', async (search) => {
  return await axios.get(`/api/search/` + (search?search:'all')).then((response) => {
    const result = JSON.parse(response.request.response)
    const data = [];
    result.data.map((item, index) => (
      data.push(<ProductItem yearsGuarantee={item.yearsGuarantee} additionalGuarantee={item.additionalGuarantee} guaranteePrice={item.guaranteePrice} product={item.product} shortening={true} view='full' category={item.category} subcategory={item.subcategory} key={index} productId={item._id} discountMode={false} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>)
      )) 
      return data
    })   
})

export default productsSlice.reducer;

export const selectAllProducts = state => state.products.value