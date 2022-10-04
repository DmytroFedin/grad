import React from "react";
import Style from './footer.module.scss'
import FooterBottom from "./footerBottom/footerBottom";
import FooterTop from "./footerTop/footerTop";

const Footer = () => {
  return (
    <>
      <footer className={Style.footer}>
      <div className='padding wrapper'>
        <FooterTop />
        <FooterBottom/>
      </div>
      </footer>
    </>
  )
}

export default Footer;