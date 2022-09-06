import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const add = (prod, indexOf, localBucket, action, state) => {
  if (prod) {
    prod.quantity += action.item.quantity;
    if(prod.quantity >= prod.maxQuantity) {
      prod.quantity = prod.maxQuantity
    }
    prod.sum = +((prod.quantity * action.item.price).toFixed(2));
    state.splice(indexOf, 1);
    localBucket.splice(indexOf, 1)
    const bucketNew = [...localBucket, prod];
    localStorage.setItem('product', JSON.stringify(bucketNew));
    return [...state, prod];}
  else {
    const bucketNew = [...localBucket, action.item];
    localStorage.setItem('product', JSON.stringify(bucketNew));
    return [...state, action.item]}
}
const del = (newArr, action) => {
  newArr.splice(action.index, 1);
  localStorage.setItem('product', JSON.stringify(newArr));
  return newArr;
}

const reducer = (state, action) => {
  let localBucket = JSON.parse(localStorage.getItem('product'));
  switch (action.type) {
    case "ADD":
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
          newArr[action.index].sum = +((newArr[action.index].quantity * newArr[action.index].price).toFixed(2));
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
