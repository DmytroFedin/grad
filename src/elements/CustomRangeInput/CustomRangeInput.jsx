
import React, { useCallback, useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import Style from "./CustomRangeInput.module.scss";
import { RangeInputContext } from "../../components/useContext/useContext";

const CustomRangeInput = ({ min, max, reset, onChange }) => {
  const [ MinVal, setMinVal ] = useState(min);
  const [ MaxVal, setMaxVal ] = useState(max);
  const [ Error, setError]  = useState(false);
  const [ InputNumber, setInputNumber]  = useState(false);
  const [ InputMinVal, setInputMinVal ] = useState();
  const [ InputMaxVal, setInputMaxVal ] = useState();
  const range = useRef(null);
  const { setRangeInputPrice } = useContext(RangeInputContext)
  const minValRef = useRef();
  const maxValRef = useRef();

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  
  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(MinVal);
    const maxPercent = getPercent(MaxVal);

    if (range.current) {
      range.current.style.left = `${Math.max(minPercent, 0)}%`;
      range.current.style.width = `${Math.min(maxPercent, 100) - Math.max(minPercent, 0)}%`;
    }
  }, [MinVal, MaxVal]);


  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: MinVal, max: MaxVal });
  }, [MinVal, MaxVal, onChange]);

  useEffect(()=>{
    setMinVal(min)
    setMaxVal(max)
    setInputMinVal(min)
    setInputMaxVal(max)
    inputCheck(InputMinVal, ((InputMaxVal)?InputMaxVal:MaxVal), true)
    inputCheck(InputMaxVal, ((InputMinVal)?InputMinVal:MinVal))
  },[reset]);

  useEffect(()=>{
      inputCheck(InputMinVal, ((InputMaxVal)?InputMaxVal:MaxVal), true)
  },[InputMinVal]);

  useEffect(()=>{
    inputCheck(InputMaxVal, ((InputMinVal)?InputMinVal:MinVal))
},[InputMaxVal]);

  useEffect(()=>{
    if(!InputNumber){
      setInputMinVal(min)
      setInputMaxVal(max)
    }
  },[InputNumber]);

  const inputCheck = ( inputNumber, compareNumber, minMode, reset) => {
    setInputNumber(true)
   if (minMode) {
     if (inputNumber >= compareNumber) {
      minValRef.current.style.outline = '1px solid red'
       setError(true)
     }
     else {
      minValRef.current.style.outline = 'none'
      setError(false)
      if(!InputMaxVal){
        setInputMaxVal(MaxVal)
      }
    }
   }

  else {
    if (inputNumber <= compareNumber) {
      maxValRef.current.style.outline = '1px solid red'
      setError(true)
    }
    else {
      maxValRef.current.style.outline = 'none'
      setError(false)
      if(!InputMinVal){
        setInputMinVal(MinVal)
      }
    }
  } 
  }

  return (
    <div className={Style.container}>
      <h4 className={Style.header}>
       Цена
      </h4>
      <form className={Style.form}>
        <input
          id="leftRange"
          type="range"
          min={min}
          max={max}
          value={MinVal}
          onChange={(event) => {
            setError(false)
            setInputNumber(false)
            const value = Math.min(Number(event.target.value), MaxVal - 1);
            setMinVal(value);
          }}
          className={`${Style.thumb} ${Style.thumbLeft}`}
          style={{ zIndex: MinVal > max - 100 && "5" }}
        />
        <input
          id="rightRange"
          type="range"
          min={min}
          max={max}
          value={MaxVal}
          onChange={(event) => {
            setError(false)
            setInputNumber(false)
            const value = Math.max(Number(event.target.value), MinVal + 1);
            setMaxVal(value);
          }}
          className={`${Style.thumb} ${Style.thumbRight}`}
        />
        <div className={Style.inputValues}>
          <input ref={minValRef} type='number' onChange={(e)=>{setInputMinVal(Number(e.target.value))
          }} className={Style.sliderLeftValue} value={InputNumber?InputMinVal:MinVal}></input>
          <span className={Style.hr} />
          <input ref={maxValRef} type='number' onChange={(e)=>{setInputMaxVal(Number(e.target.value))
          }} className={Style.sliderRightValue} value={InputNumber?InputMaxVal:MaxVal}></input>
          <input disabled={Error} onClick={(e)=>{
            if(setInputNumber) {
              setRangeInputPrice([e.target.form[2].value, e.target.form[3].value])
            }
            else {
            setRangeInputPrice([e.target.form[0].value, e.target.form[1].value])
            }
            e.preventDefault()}} className={Style.submitBtn} type="submit" value='OK'></input>
        </div>
          </form>
        <div className={Style.slider}>
          <div className={Style.sliderTrack} />
          <div ref={range} className={Style.sliderRange} />
        </div>

    </div>
  );
};

CustomRangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CustomRangeInput;

