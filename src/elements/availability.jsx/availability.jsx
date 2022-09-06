import React from "react";
import Icon from "../icon/icon";
import Style from './availability.module.scss'

const Availabilty = (props) => {

  const quantityCheck = () => {
    if (props.quantity > 15) {
      const text = <span className={Style.green}>В наличии</span>
      const availability = [text]
      const icon = '#icon-GreenCircle'
      for(let i = 0; i < 3;i++) {
        availability.push(<Icon link={icon} />)
      }
      return availability;
    } else if (props.quantity >= 5) {
      const text = <span className={Style.green}>В наличии</span>
      const availability = [text]
      const icon = '#icon-GreenCircle'
      const iconBlank = '#icon-GreenBlankCircle'
      for(let i = 0; i < 2;i++) {
        availability.push(<Icon link={icon} />)
      }
      for(let i = 0; i < 1;i++) {
        availability.push(<Icon link={iconBlank} />)
      }
      return availability;
    } else if (props.quantity < 5 && props.quantity > 0) {
      const text = <span className={Style.orange}>Осталось мало</span>
      const availability = [text]
      const icon = '#icon-OrangeCircle';
      const iconBlank = '#icon-OrangeBlankCircle'
      for(let i = 0; i < 1;i++) {
        availability.push(<Icon link={icon} />)
      }
      for(let i = 0; i < 2;i++) {
        availability.push(<Icon link={iconBlank} />)
      }
      return availability;
    } else {
      const text = <span className={Style.red}>Нет в наличии</span>
      const availability = [text]
      const icon = '#icon-RedBlankCircle'
      for(let i = 0; i < 3;i++) {
        availability.push(<Icon link={icon} />)
      }
      return availability;
    } 
  };
  return (
    <>
    {quantityCheck().map((item, index) => (
      <div key={index} className={Style.item}>{item}</div>
    ))
    }
    </>
  )
}

export default Availabilty