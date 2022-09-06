import React from "react";
import {ReactComponent as ReactLogo} from './logo.svg';
import './logo.css'

const Logo = () => {
  return (
    <>
          <a className='e-logo__svg' href='./index.html'>
          <ReactLogo/>
          </a>
    </>
  )
};


export default Logo;