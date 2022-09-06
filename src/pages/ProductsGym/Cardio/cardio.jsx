
import React, { useMemo, useState } from "react";
import { useParams, Outlet } from "react-router-dom";

import {BreadcrumbsSection} from "../../../components/breadCrumps1/breadCrumps1";

const CardioG = (props) => {
const id = useParams()

  
  return (
    <>
      <div>
      <BreadcrumbsSection id={id}/>

      </div>
    <Outlet/>
    </>
  );
};

export default CardioG;
