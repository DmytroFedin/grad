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
  open: [false, false],
  setOpen: () => {}
});

export const IsAuthContext = createContext({
  isAuth: false,
  setIsAuth: () => {}
});

export const LoggedUserContext = createContext({
  user: [],
  setUser: () => {}
});