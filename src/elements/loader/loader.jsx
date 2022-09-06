import React from "react";
import styled from "styled-components";

const variables = {
  color: "#0062ff"
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  right: 50%;
`;
const Svg = styled.svg`
  animation: rotate 1.4s linear infinite;
  width:50px;
  height: 50px;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
`;
const Circle = styled.circle`
  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  @keyframes colors {
    0% {
      stroke: ${variables.color};
    }
    100% {
      stroke: ${variables.color};
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
`;

const Loader = props => {
  return (
    <Wrapper {...props}>
      <Svg
      viewBox= '0 0 66 66'
      xmlns= 'http://www.w3.org/2000/svg'
      >
        <Circle
        cx= '33'
        cy= '33'
        r= '30'
        />
      </Svg>
    </Wrapper>
  );
};

export default Loader;