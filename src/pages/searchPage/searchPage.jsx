
import { useContext, useState } from 'react';
import Filters from '../../components/filters/filters';
import {LoadingContext, ProductsContext, MobileViewContext} from '../../components/useContext/useContext';
import Loader from '../../elements/loader/loader';
import Pagination from '../../elements/Pagination/pagination';
import Style from './searchPage.module.scss';

 const SearchPage = () => {
  const { products } = useContext(ProductsContext);
  const [ currentProducts, setCurrentProducts ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(null);
  const [ totalPages, setTotalPages ] = useState(null);
  const { loading } = useContext(LoadingContext);
  const { mobileView } = useContext(MobileViewContext);

  const onPageChanged = (data) => {
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProductsCalc = products.slice(offset, offset + pageLimit);

    setCurrentProducts(currentProductsCalc);
    setCurrentPage(currentPage);
    setTotalPages(totalPages);
  };
  const totalProducts = products.length;

  return(
    <div className={`padding ${Style.content}`}>
      <div className={Style.pages}>
        {(loading === false)?
          <>
            <div className={Style.searchOutput}>{currentProducts}</div>
            <div className={Style.pagination}>
              <Pagination
                  totalRecords={totalProducts}
                  pageLimit={12}
                  pageNeighbours={1}
                  onPageChanged={onPageChanged}
                  products={products}
                />
            </div>
          </>  :
            <Loader/>}
      </div>
      {/* <span className={Style.verticalDivider}></span> */}
      {(mobileView.customerWidth < mobileView.tabletWidth)?<Filters mobile={true}/>: <Filters/>}
    </div>
  )
}

export default SearchPage;