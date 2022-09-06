import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import HeaderBottom from "../header-bottom/header-bottom";
import HeaderMiddle from "../header-middle/header-middle";
import HeaderTop from "../header-top/header-top";
import { MobileViewContext } from "../useContext/useContext";
import Style from './header.module.scss'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Header = () => {
  const { mobileView, setMobileView } = useContext(MobileViewContext);
  const { height, width } = useWindowDimensions();
  const laptop = 1410;
  const tablet = 980;
  const mobile = 680;

  useEffect(()=>{
    setMobileView({ customerWidth:width, laptopWidth:laptop, tabletWidth:tablet, mobileWidth:mobile })
  
  },[width])

  
  return (
    <header className={Style.header}>
      <div className={`padding ${Style.headerWrapper}`}>
        {(width < laptop)?
        <>
          <HeaderTop/>
          <HeaderBottom/>
        </>
        :
        <>
          <HeaderTop/>
          <HeaderMiddle/>
          <HeaderBottom/>
        </>
      }
      </div>
    </header>
  )

}


export default Header;