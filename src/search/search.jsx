import axios from 'axios';
import React, {useContext, useEffect, useReducer, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem/ProductItem';
import {LoadingContext, ProductsContext} from '../components/useContext/useContext';
import Icon from '../elements/icon/icon';
import Style from './search.module.scss';

const Search = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const [ search, setSearch ] = useState('');
  const { products, setProducts } = useContext(ProductsContext);
  const [ result, setResult ] = useState(null)

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  const FetchSearch = async ()=>{
    setLoading(true);
    await axios.get('/api/search/' + (search?search:'all')).then((response) => {
      const result = JSON.parse(response.request.response)
      const data = [];
      result.data.map((item, index) => (
        data.push(<ProductItem yearsGuarantee={[0,0,0,0,0]} additionalGuarantee={0} guaranteePrice={0}  product={item.product} shortening={true} view='full' category={item.category} subcategory={item.subcategory} key={index} productId={item._id} discountMode={false} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>)
        )) 
        setProducts(data);
      })   
      goToTop()
    setLoading(false);
  }

  const fetchAutocomplite = () => {
      axios.get('/api/autocomplete/' + search).then((response) => {
       const result = JSON.parse(response.request.response)
       const data =[]
       result.data.map((item, index) => (
        data.push(<ProductItem  exec={() => setResult(!result)} view='' category={item.category} subcategory={item.subcategory} key={index} productId={item._id} discountMode={false} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>)
        )) 
      setResult(data)

  })}

  useEffect(() => {
    if (search.length > 0) {
      fetchAutocomplite();
    }
  },[search])

  const dropdownRef = useRef(null);

  const checkIfClickedOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setResult(!result)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [result])

    const handleOnChange = (e) => {
      e.preventDefault()
      setSearch(e.target.value)
    }


  return(
    <div className={Style.searchBox}>
    <div className={Style.searchBar}>
    <input className={Style.searchInput} name='search' onChange={(event) => {handleOnChange(event)}}></input>
    <Link to={'/search'} onClick={FetchSearch} className={Style.icon}>
          <Icon link={'#icon-search'}/>
    </Link>
    </div>
    {(result && result.length > 0 && search !== '')?<div ref={dropdownRef} className={Style.searchResult}>{result}</div>:''}
    </div>
  )
}

export default Search
