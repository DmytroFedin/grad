import  { createContext } from "react";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {}
});

export const  LoadingContext = createContext({
  loading: false,
  setLoading: () => {}
});

export const  BreadcrumbContext = createContext({
  dynamicBreadcrumb: [],
  setDynamicBreadcrumb: () => {}
});

export const  RangeInputContext = createContext({
  rangeInputPrice: [],
  setRangeInputPrice: () => {}
});

export const  MobileViewContext = createContext({
  mobileView: {},
  setMobileView: () => {}
});

export const  BackendRouteContext = createContext({
  backendRoute: {},
  setBackendRoute: () => {}
});

export const RegistrationModalContext = createContext({
  open: false,
  setOpen: () => {}
});