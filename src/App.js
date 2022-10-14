import { BrowserRouter as Router, Routes, Route, useRoutes, useLocation } from 'react-router-dom';
import './app.scss'
import Header from './components/header/header';
import {ReactComponent as ReactIcons} from './pages/main/symbol-defs.svg';
import Path from './components/routes/menuItem';
import CardioG from './pages/ProductsGym/Cardio/cardio';
import Footer from './components/footer/footer';
import React, { useMemo, useState, useEffect } from "react";
import {LoadingContext, ProductsContext, BreadcrumbContext, RangeInputContext, MobileViewContext, BackendRouteContext, RegistrationModalContext} from './components/useContext/useContext';
import AuthPage from './pages/auth/auth';
import { CartProvider } from './components/useContext/cartContext';
import HomePage from './components/BreadCrumbs/Home-page';
import ProductsGym from './pages/ProductsGym/productsGym';
import CardioH from './pages/ProductsHome/Cardio/cardio';
import  SearchPage from './pages/searchPage/searchPage';
import BucketPage from './pages/bucketPage/bucketPage';

const App = () => {
  // const [bucket$, addBucket$] = createSignal();
  const [mobileView, setMobileView] = useState({});
  const viewValue = useMemo(() => ({ mobileView, setMobileView }), [mobileView]);
  const [products, setProducts] = useState([]);
  const productsValue = useMemo(() => ({ products, setProducts }), [products]);
  const [loading, setLoading] = useState(false);
  const loadingValue = useMemo(() => ({ loading, setLoading }), [loading]);
  const [dynamicBreadcrumb, setDynamicBreadcrumb] = useState([]);
  const breadcrumbValue = useMemo(() => ({ dynamicBreadcrumb, setDynamicBreadcrumb }), [dynamicBreadcrumb]);
  const [rangeInputPrice, setRangeInputPrice] = useState(false);
  const priceRange = useMemo(() => ({ rangeInputPrice, setRangeInputPrice }), [rangeInputPrice]);
  const [backendRoute, setBackendRoute] = useState('https://grad-backend-server.herokuapp.com/');
  const routeValue = useMemo(() => ({ backendRoute, setBackendRoute }), [backendRoute]);
  const [open, setOpen] = useState(false);
  const registrationValue = useMemo(() => ({ open, setOpen }), [open]);

  
  if (!localStorage.product) {
    localStorage.setItem('product', JSON.stringify([]));
  }
  
  const MenuItem = [
    {
      path: "Gym-equipment",
      element: <CardioH />,
      children: [
        {
          path: "Cardio",
          element: <ProductsGym Home={false} />,
          children: [
            {
              path: "Thredmills",
              element: <CardioG />,
              children: [
                  {
                      path: ":title",
                      element: <AuthPage />,
                  }
              ]
            },
          ]},]},
    {
      path: "/auth",
      element: <AuthPage />,
    
    },
    {
      path: "/search",
      element: <SearchPage />,
    
    },
    {
      path: "/cart",
      element: <BucketPage />,
    
    },
    {
      path: "/*",
      element: <HomePage />,

    },
]  
  let routes = useRoutes(MenuItem)
  // console.log(useLocation());
  return (
    <>
      {/* <Router> */}
        <ReactIcons/>
        <RangeInputContext.Provider value={priceRange}>
        <ProductsContext.Provider value={productsValue}>
        <LoadingContext.Provider value={loadingValue}>
        <BreadcrumbContext.Provider value={breadcrumbValue}>
        <MobileViewContext.Provider value={viewValue}>
        <BackendRouteContext.Provider value={routeValue}>
        <RegistrationModalContext.Provider value={registrationValue}>
        <CartProvider>
        <Header />
          {routes}
        {/* <Routes> */}
          {/* <Route path='/Gym-equipment/:category/:subcategory/:title' element={<HomePage />}  />
          <Route path='/auth' element={<AuthPage />}/> */}
          {/* <Route path='/*' element={<HomePage />} /> */}
        {/* </Routes> */}
        <Footer />
        </CartProvider>
        </RegistrationModalContext.Provider>
        </BackendRouteContext.Provider>
        </MobileViewContext.Provider>
        </BreadcrumbContext.Provider>
        </LoadingContext.Provider>
        </ProductsContext.Provider>
        </RangeInputContext.Provider>
      {/* </Router> */}
    </>
  );
};

export default App;
