import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { LoadingContext, MobileViewContext, ProductsContext, RangeInputContext } from '../useContext/useContext';
import CustomRangeInput from '../../elements/CustomRangeInput/CustomRangeInput'
import Style from './filters.module.scss'
import {ReactComponent as FilterLogo} from '../../assets/icons/Filter.svg'

const Filters = (props) => {
  const { RangeInputPrice } = useContext(RangeInputContext)
  const { products, setProducts } = useContext(ProductsContext);
  const [ Brends, setBrends ] = useState();
  const [ reset, setReset ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const [ Filters, setFilters ] = useState();
  const [ MaxPrice, setMaxPrice ] = useState();
  const [ MinPrice, setMinPrice ] = useState();
  const [ PriceRange, setPriceRange ] = useState();
  const [ Checked, setChecked ] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);
  const { mobileView, setMobileView } = useContext(MobileViewContext);
  const checkRef = useRef()

  const FetchBrends = async ()=>{
    await axios.get('/api/brends').then((response) => { 
      const result = JSON.parse(response.request.response)
      setBrends(result.data); 
    })   
  };

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };
  
  const keyValExtremums = (array, key, minMode) =>{ 
    return (minMode)?Math.trunc(Math.min(...array.map(o => o[key]))):
    Math.trunc(Math.max(...array.map(o => o[key])))
  };

  const FetchProducts = async ()=>{
    goToTop();
    setLoading(true);
    await axios.get('/api/Threadmills').then((response) => {
      const result = JSON.parse(response.request.response)
      setMaxPrice(keyValExtremums(result.data, 'price', false));
      setMinPrice(keyValExtremums(result.data, 'price', true))
      const data = [];
      result.data.map((item, index) => (
        data.push(<ProductItem shortening={true} view='full' category={item.category} subcategory={item.subcategory} key={index} productId={item._id} discountMode={false} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>)
        )) 
      setProducts(data);
    })   
    setLoading(false);
  }

  useEffect(() => {
    if(Checked.length > 0 || PriceRange) {
      activeFilters()
    }
    if (Checked.length < 1 && !PriceRange) {
      setFilters('')
      setProducts('')
      FetchProducts()
      
    }
  },[Checked, PriceRange])
  
  useEffect(() => {
    FetchBrends();
  },[])

  const gatherFilters = (e) => {
    let updatedList = [...Checked];
    if (e.checked) {
      updatedList = [...Checked, e.value];
    } else {
      updatedList.splice(Checked.indexOf(e.value), 1);
    }
    setChecked(updatedList);
  }

  const activeFilters = () => {
    if (Checked.length > 0) {
      const result = `manufacturers=${Checked}`
      if (PriceRange) {
        const price = result.concat(`&price=${PriceRange}`)
        setFilters(price)

      }
      else setFilters(result)
    }
    if (PriceRange) {
      const result = `price=${PriceRange}`
      if (Checked.length > 0) {
        const price = result.concat(`&manufacturers=${Checked}`)
        setFilters(price)
    }
    else setFilters(result)
  }
  }

  useEffect(() => {
    if(Filters) {
      filterFetch();  
    }
  },[Filters])

  useEffect (()=>{
    setPriceRange(RangeInputPrice)
  },[RangeInputPrice])

  const filterFetch = async ()=>{
    goToTop();
    setLoading(true);
    await axios.get(`/api/filter/?` + Filters).then((response) => {
      
      const result = JSON.parse(response.request.response)
      const data = [];
      if (result.data.length > 0) {
        result.data.map((item, index) => (
          data.push(<ProductItem shortening={true} view='full' category={item.category} subcategory={item.subcategory} key={index} productId={item._id} discountMode={false} title={item.name} rating={item.rating} poster={item.image} availability={item.availability} price={item.price} quantity={item.quantity} type={item.type} runningBeltType={item.runningBeltType} runningBeltLength={item.runningBeltLength} manufacturer={item.manufacturer} engine={item.engine}/>)
          )) 
        setProducts(data);
     
      }
      else {
        setProducts('0');
        
    }
    })  
    setLoading(false); 
  }

  const reseting = () => {
    return checkRef.current[(Brends.length)].click();
  }

  return (
    <>
    {props.mobile?
      <>
        <div className={Style.filterBtn} onClick={()=>{setOpen(!open)}}>
          <div className={Style.filterLogo}>
            <FilterLogo/>
          </div>
          <span>Фильтр</span>
         </div>
      <div className={open?`${Style.leftMenu} ${Style.active}`:Style.leftMenu}>
        <div className={Style.closeBtn} onClick={() => setOpen(false)}>
          <span className={Style.bar}></span>
          <span className={Style.bar}></span>
          <span className={Style.bar}></span>
        </div>
        <div className={Style.filterBar}>
        <div className={Style.brandsContainer}>
          <h4>Производители:</h4>
          <form className={Style.brandsContent} ref={checkRef}>
          {(Brends)?Brends.map((item,index)=>{
            return <label htmlFor={item.name} className={Style.brand} key={index} >
            <input  onChange={(e)=>{
              gatherFilters(e.target)
              }} type={'checkbox'} id={item.name} value={item.name} />
            <span className={Style.checkmark}></span>
            <span className={Style.brandName}>{item.name}</span>
            </label>
          }):''}
          <input className={Style.displayNone} type={'reset'}/>
          </form>
        </div>
          <span className={Style.horizontalDivider}/>
          <div className={Style.RangeInput}>
            {(MinPrice)?<CustomRangeInput
              min={MinPrice}
              max={MaxPrice}
              reset={reset}
              onChange={({ min, max }) => {}}
              />:''}
          </div>
          <span className={Style.horizontalDivider}/>
          <div onClick={()=>{setReset(!reset);setChecked('');reseting()}}>Очистить</div>
        </div>
      </div>
      </>
    :
      <div className={Style.filterBar}>
        <div className={Style.brandsContainer}>
          <h4>Производители:</h4>
          <div className={Style.brandsContent}>
          {(Brends)?Brends.map((item,index)=>{
            return <label htmlFor={item.name} className={Style.brand} key={index} >
            <input  onChange={(e)=>{
              gatherFilters(e.target)
              }} type={'checkbox'} id={item.name} value={item.name} />
            <span className={Style.checkmark}></span>
            <span className={Style.brandName}>{item.name}</span>
            </label>
          }):''}
          </div>
        </div>
          <span className={Style.horizontalDivider}/>
          <div className={Style.RangeInput}>
            {(MinPrice)?<CustomRangeInput
              min={MinPrice}
              max={MaxPrice}
              onChange={({ min, max }) => {}}
              />:''}
          </div>
          <span className={Style.horizontalDivider}/>
        </div>
    }
    </>
  )
}

export default Filters