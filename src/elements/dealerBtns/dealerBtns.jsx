
import LinkCustom from '../link/link'
import Style from './dealerBtns.module.scss'

const DealerBtns = (props) => {
  return (
    <>
      {props.enterBtn?
        <div className={`${Style.buttons} ${Style.enterBtn}`}> 
          <div>
            <LinkCustom text={'Покупатель'}/>
            </div>
            <div>
            <LinkCustom text={'Авторизированный диллер'}/>
          </div>
        </div>
        :
        <div className={props.columnMode?`${Style.buttons} ${Style.buttonsColumn}`:Style.buttons}> 
          <div>
            <LinkCustom text={'Become a Partner'}/>
            </div>
            <div>
            <LinkCustom text={'Для дилеров'}/>
          </div>
        </div>
      }
    </>
  )
}

export default DealerBtns