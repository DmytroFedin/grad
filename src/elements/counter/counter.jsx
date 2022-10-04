import { useEffect, useState } from 'react'
import Style from './counter.module.scss'

const Counter = (props) => {
  const [error, setError ] = useState(false)

  useEffect(()=> {
    (props.quantity <= props.guaranteeQuantity)?setError(false):setError(false);
  },[props.guaranteeQuantity])

  return (
    <div className={props.grayStyle?Style.guaranteeCounter:`${Style.guaranteeCounter} ${Style.black}`}>
      {props.grayStyle?
        props.quantityMode?
        <>
          <div className={Style.guaranteeChange} onClick={(e) => {props.minus(e, props.index)}}>
              –
            </div>
            <div className={Style.count}>
              {`${props.quantity} шт.`}
            </div>
            <div className={Style.guaranteeChange} onClick={(e) => {props.plus(e, props.index, props.maxQuantity)}}>
              +
          </div>
        </>
        : 
        <>
          <div className={Style.guaranteeChange} onClick={(e) => {props.minus(e, props.index)}}>
              –
            </div>
            <div className={Style.count}>
              {(props.quantity > 1)?(props.quantity === 5)?`${props.quantity} лет`:`${props.quantity} года`:`${props.quantity} год`}
            </div>
            <div className={Style.guaranteeChange} onClick={(e) => {props.plus(e, props.index)}}>
              +
          </div>
        </>
            :
        <>
          <div className={Style.guaranteeChange} onClick={() => {(props.quantity<= props.guaranteeQuantity)?setError(true):props.minus(props.index, Math.abs(props.value))}}>
              –
          </div>
          <span  className={`${Style.countSmall} ${Style.count}`}>{props.quantity}</span>
          <div className={Style.guaranteeChange} onClick={(e) => {props.plus(e);setError(false)}}>
            +
          </div>
          {error?
            <span className={Style.error}>Переоформите дополнительную гарантию</span>
          :''}
        </>
      }
    </div>
  )
}

export default Counter;