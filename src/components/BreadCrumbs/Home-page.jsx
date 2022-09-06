
// import Breadcrumbs from "../breadCrumps1/breadCrumps1";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import Style from './homePage.module.scss'
import Path from "../routes/menuItem";
import Banner from "../homeBanner/homeBanner";
import ShowCaseProductsGrid from "../ShowCaseProductsGrid/showCaseProductsGrid";
import InfoBlock from "../infoBlock/infoBlock"
import { useContext, useEffect, useState } from "react";
import {LoadingContext, ProductsContext} from "../useContext/useContext";
import Pagination from "../../elements/Pagination/pagination";
import Loader from "../../elements/loader/loader";
import Brends from '../Brends/brends';
import IdeasBanner from '../IdeasBanner/ideasBanner';
import BurgerMenu from '../../elements/burger-menu/burgerMenu';


const HomePage = (props) => {
  const breadcrumbs = useBreadcrumbs(Path);
  const { products } = useContext(ProductsContext);

  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const {loading, setLoading} = useContext(LoadingContext);



  const onPageChanged = (data) => {
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProductsCalc = products.slice(offset, offset + pageLimit);

    setCurrentProducts(currentProductsCalc);
    setCurrentPage(currentPage);
    setTotalPages(totalPages);
  };
  const totalProducts = products.length;
console.log(breadcrumbs.at(-1).breadcrumb);
  
  return (
    <>
      <div className={Style.container}>
        {/* <div className={Style.breadCrumps}>
          <Breadcrumbs id={props.id}></Breadcrumbs>
        </div> */}
        <div className={`padding ${Style.banner}`}>
        <Banner discountMode={false} />
        </div>
        {/* <div className={Style.pageHeader}>
          <h1>{(breadcrumbs.at(-1).breadcrumb.props.children === 'Дом')?'':decodeURI(breadcrumbs.at(-1).breadcrumb.props.children).replace(/[\w]{24}/g,'')}</h1>
        </div> */}
        <div className={`wrapper ${Style.showCase}`}>
          <ShowCaseProductsGrid order={1}/>
        </div>
        <div className={`wrapper ${Style.showCase}`}>
          <ShowCaseProductsGrid order={0}/>
        </div>
        <div className={`padding ${Style.promotion}`}>
        <Banner PromotionMode={true} />
        </div>
        <div className={Style.infoBlock}>
          <InfoBlock />
        </div>
        <div className={Style.ideasBanner}>
        <IdeasBanner />
        </div>
        <div className={`padding ${Style.brandsDisplay}`}>
        <Brends/>
        </div>
        <BurgerMenu />
        </div>
    </>
  )
}

export default HomePage