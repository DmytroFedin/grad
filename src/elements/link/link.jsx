import React from "react";
import { Link } from "react-router-dom";
import Style from "./link.module.scss";
import {ReactComponent as Plane} from "../../assets/icons/paperPlane.svg";
import Icon from "../icon/icon";

const LinkCustom = (props) => {
  const modeCheck = (props) => {
    if (props.redBorderEmptyMode) {
      return (
        <Link
          to={props.to || "/"}
          className={props.GrayStyle ? Style.grayBtn : props.Bigger? `${Style.Btn} ${Style.BtnBigger}`: Style.Btn}
        >
          <span>{props.text}</span>
          {props.GrayStyle ? <Plane className={Style.icon} /> : ""}
        </Link>
      );
    } else if (props.BigRed) {
      return (
        <div className={Style.catalogue}>
          {props.bannerMode ? (
            <Link
              to={props.to || "/"}
              className={props.cartMode? `${Style.catalogueBtn} ${Style.catalogueBtnCartBtn}`:`${Style.catalogueBtn} ${Style.catalogueBtnTab}`}
            >
              <span className={Style.textBold}>{props.text}</span>
            </Link>
          ) : (
            <>
              <button
                className={
                  props.icon === true
                    ? Style.catalogueBtn
                    : `${Style.catalogueBtn} ${Style.catalogueBtnsmaller}`
                }
                disabled={props.disabled}
                type="button"
                onClick={props.click}
              >
                <div
                  className={
                    props.icon === true
                      ? `${Style.iconWrapper} ${Style.iconWrapperSmaller}`
                      : Style.iconWrapper
                  }
                >
                  <Icon
                    link={props.icon === true ? "#icon-menu" : "#icon-bucket"}
                  />
                </div>
                <span className={Style.textBold}>
                  {props.icon === true ? "Каталог" : "Купить"}
                </span>
              </button>
            </>
          )}
        </div>
      );
    } else {
      return (
        <Link
          to={props.to || "/"}
          className={
            props.redMode ? `${Style.link} ${Style.linkRedLink}` : Style.link
          }
        >
          <span className={Style.text}>{props.text}</span>
        </Link>
      );
    }
  };

  return <>{modeCheck(props)}</>;
};

export default LinkCustom;
