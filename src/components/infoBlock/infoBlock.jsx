import Style from './infoBlock.module.scss';
import {ReactComponent as Person} from '../../assets/icons/person.svg';
import {ReactComponent as Help} from '../../assets/icons/help.svg';
import {ReactComponent as Showroom} from '../../assets/icons/showroom.svg';
import {ReactComponent as Call} from '../../assets/icons/call.svg';
import Hand from '../../assets/images/hand.png';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg'


const InfoBlock = () => {
  const tabInfo = [{
    icon: <Help />,
    title: 'Помощь покупателю',
    description: 'Узнайте как приобрести товар, способы доставки и оплаты, а также условия гарантии.',
    btnText: 'Подробнее'
  },{
    icon: <Call />,
    title: 'Заявка на сервис',
    description: 'Оставьте заявку на проведение гарантийного и постгарантийного ремонта.',
    btnText: 'Оставить заявку '
  },{
    icon: <Person />,
    title: 'Личный кабинет партнера B2B',
    description: 'Личный кабинет дилера с доступом к информационным материалам',
    btnText: 'Стать партнером '
  },{
    icon: <Showroom />,
    title: 'Выставочный зал',
    description: 'Оставьте заявку на посещение шоу-рума в Москве',
    btnText: 'Записаться'
  },]

  
  return (
    <>
    <div className={Style.absolute}>
    {tabInfo.map((tab, index) => (
      <div key={index} className={Style.padding}>
      <div className={Style.container} >
        <div className={Style.wrapper}>
          <div className={Style.img}>
            {tab.icon}
          </div>
          <div className={Style.text}>
            <h3>{tab.title}</h3>
            <p>{tab.description}</p>
          </div>
          <div className={Style.btn}>
            <a href='.'>{tab.btnText}</a>
            <div className={Style.arrow}>
            <Arrow />
            </div>
          </div>
        </div>
        <div className={Style.hand}>
        <img src={Hand} alt=''></img>
        </div>
      </div>
      </div>
    ))}
    </div>
    </>
  )
}

export default InfoBlock