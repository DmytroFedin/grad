import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const check = (arr, action, obj) => {
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

const add = (prod, indexOf, localBucket, action, state) => {
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
const del = (newArr, action) => {
    newArr.splice(action.index, 1);
    localStorage.setItem('product', JSON.stringify(newArr));
    return newArr;
}

const reducer = (state, action) => {
  let localBucket = JSON.parse(localStorage.getItem('product'));
  const newArr = [...localBucket];
  switch (action.type) {
    case "ADD":
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
    case "REMOVE":
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
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
