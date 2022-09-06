import  { createContext } from "react";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {}
});

export const  LoadingContext = createContext({
  loading: false,
  setBucket: () => {}
})

export const  BreadcrumbContext = createContext({
  dynamicBreadcrumb: [],
  setDynamicBreadcrumb: () => {}
})

export const  RangeInputContext = createContext({
  RangeInputPrice: [],
  setRangeInputPrice: () => {}
})

export const  MobileViewContext = createContext({
  mobileView: {},
  setMobileView: () => {}
})