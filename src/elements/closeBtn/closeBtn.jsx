import Style from './closeBtn.module.scss';

const CloseBtn = (props) => {
  return (
    <>
      {props.burgerMenu ?
        <div className={props.active?`${Style.menu} ${Style.active}`:Style.menu} onClick={() => props.setState(!props.state)} ref={props.closeBtn}>
          <span className={Style.bar}></span>
          <span className={Style.bar}></span>
          <span className={Style.bar}></span>
        </div>
        :
        <div className={props.bigMode?`${Style.cross} ${Style.crossBigger}`:Style.cross} onClick={() => {props.setState(!props.state)}}>
          <span className={props.bigMode?`${Style.crossLeft} ${Style.crossLeftBigger}`:Style.crossLeft}></span>
          <span className={props.bigMode?`${Style.crossRight} ${Style.crossRightBigger}`:Style.crossRight}></span>
        </div>
      }
    </>
  )
}

export default CloseBtn;