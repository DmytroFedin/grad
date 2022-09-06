import React from "react";
import Icon from "../icon/icon";
import Style from './rating.module.scss'

const Rating = (props) => {
  const ratingCheck = () => {
    const text = 'Рейтинг'
    if (props.rating === 1) {
      const stars = [text]
      const icon = '#icon-Star'
      const iconBlank = '#icon-BlankStar'
      for(let i = 0; i < 1;i++) {
        stars.push(<Icon link={icon} />)
      }
      for(let i = 0; i < 4;i++) {
        stars.push(<Icon link={iconBlank} />)
      }
      return stars;
    }
    else if (props.rating === 2) {
      const stars = [text]
      const icon = '#icon-Star'
      const iconBlank = '#icon-BlankStar'
      for(let i = 0; i < 2;i++) {
        stars.push(<Icon link={icon} />)
      }
      for(let i = 0; i < 3;i++) {
        stars.push(<Icon link={iconBlank} />)
      }
      return stars;
    }
    else if (props.rating === 3) {
      const stars = [text]
      const icon = '#icon-Star'
      const iconBlank = '#icon-BlankStar'
      for(let i = 0; i < 3;i++) {
        stars.push(<Icon link={icon} />)
      }
      for(let i = 0; i < 2;i++) {
        stars.push(<Icon link={iconBlank} />)
      }
      return stars;
    }
    else if (props.rating === 4) {
      const stars = [text]
      const icon = '#icon-Star'
      const iconBlank = '#icon-BlankStar'
      for(let i = 0; i < 4;i++) {
        stars.push(<Icon link={icon} />)
      }
      for(let i = 0; i < 1;i++) {
        stars.push(<Icon link={iconBlank} />)
      }
      return stars;
    }
    else if (props.rating === 5) {
      const stars = [text]
      const icon = '#icon-Star'
      for(let i = 0; i < 5;i++) {
        stars.push(<Icon link={icon} />)
      }
      return stars;
    }
    else {
      const stars = [text]
      const iconBlank = '#icon-BlankStar'
      for(let i = 0; i < 5;i++) {
        stars.push(<Icon link={iconBlank} />)
      }
      return stars}
  }
  return (
    <>
    {ratingCheck().map((item, index) => (
      <span key={index} className={Style.rating}>{item}</span>
    ))
    }
    </>
  )
}

export default Rating