import { useContext } from 'react';
import { RegistrationModalContext } from '../../components/useContext/useContext';
import Style from './closeBtn.module.scss';

const CloseBtn = (props) => {
  const { setOpen } = useContext(RegistrationModalContext);
  return (
    <>
      {props.burgerMenu ?
        <div className={props.active?`${Style.menu} ${Style.active}`:Style.menu} onClick={() => props.setOpen(!props.state)} ref={props.closeBtn}>
          <span className={Style.bar}></span>
          <span className={Style.bar}></span>
          <span className={Style.bar}></span>
        </div>
        :
        <div className={props.bigMode?`${Style.cross} ${Style.crossBigger}`:Style.cross} onClick={() => {setOpen([false, false])}}>
          <span className={props.bigMode?`${Style.crossLeft} ${Style.crossLeftBigger}`:Style.crossLeft}></span>
          <span className={props.bigMode?`${Style.crossRight} ${Style.crossRightBigger}`:Style.crossRight}></span>
        </div>
      }
    </>
  )
}

export default CloseBtn;