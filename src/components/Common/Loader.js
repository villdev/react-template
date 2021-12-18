import React from "react";
import styled, { keyframes } from "styled-components";

// const DualRingsAnim = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

const CircleRingAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
;`;

// const DualRings = styled.div`
//   & {
//     display: inline-block;
//     width: ${(props) => (props.size === "sm" ? "24px" : "40px")};
//     height: ${(props) => (props.size === "sm" ? "24px" : "40px")};
//   }
//   &:after {
//     content: " ";
//     display: block;
//     width: ${(props) => (props.size === "sm" ? "16px" : "24px")};
//     height: ${(props) => (props.size === "sm" ? "16px" : "24px")};
//     margin: 4px;
//     border-radius: 50%;
//     border: 2px solid #000;
//     border-color: #000 transparent #000 transparent;
//     animation: ${DualRingsAnim} 1.2s linear infinite;
//   }
// `;

const CircleLoader = styled.div`
  & {
    display: inline-block;
    position: relative;
    width: ${(props) => (props.size === "sm" ? "24px" : "40px")};
    height: ${(props) => (props.size === "sm" ? "24px" : "40px")};
  }
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => (props.size === "sm" ? "16px" : "24px")};
    height: ${(props) => (props.size === "sm" ? "16px" : "24px")};
    margin: 4px;
    border: ${(props) => (props.size === "sm" ? "2px" : "4px")} solid
      currentColor;
    border-radius: 50%;
    animation: ${CircleRingAnim} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Loader = ({ className, size }) => {
  return (
    <React.Fragment>
      {/* <DualRings className={className} size={size} /> */}
      <CircleLoader size={size} className={className}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </CircleLoader>
    </React.Fragment>
  );
};

export default Loader;
