import React, { useContext } from "react";
import Logo from "../../../elements/logo/logo";
import Style from './footerBottom.module.scss';
import { MobileViewContext } from "../../useContext/useContext";
import FooterContacts from "../footerTop/footerContacts/footerContacts";
import DealerBtns from "../../../elements/dealerBtns/dealerBtns";
import Socials from "../../../elements/socials/socials";
import PaymentIcons from "../../../elements/paymentIcons/paymentIcons";



const FooterBottom = () => {
const  { mobileView } = useContext(MobileViewContext);
  return (
    <div className={Style.wrapper}>
    {
      (mobileView.customerWidth <= mobileView.mobileWidth)?<div className={Style.dealerBtns}><DealerBtns columnMode={true} /></div>:
      ''
    }
    {
      (mobileView.customerWidth <= mobileView.mobileWidth)?
      <div className={Style.contacts}>
        <FooterContacts rowMode={false}/>
      </div>
      :
      (mobileView.customerWidth <= mobileView.laptopWidth)?
      <div className={Style.contacts}>
        <FooterContacts rowMode={true}/>
      </div>
      :''
    }
    <div className={Style.container}>
    <div className={Style.logoContainer}>
      <div className={Style.logo}>
        <Logo/>
      </div>
      <span className={Style.rights}>&copy; WellFitness. 2022 Все права защищены</span>
    </div>
    {
      (mobileView.customerWidth <= mobileView.mobileWidth)?'':
    <Socials/>
    }
    {
      (mobileView.customerWidth <= mobileView.laptopWidth)?'':
      <div className={Style.dealerBtns}>
        <DealerBtns />
      </div>
    }
      <PaymentIcons/>
    </div>
    </div>
  )
}

export default FooterBottom