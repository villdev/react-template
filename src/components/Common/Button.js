import React from "react";
import Loader from "../Common/Loader";
import styled from "styled-components";

// interface Props {
//   type?: 'button' | 'submit' | 'reset';
//   color?: 'primary' | 'secondary' | 'other';
//   size?: 'small' | 'large' | 'medium';
//   variant?: 'contained' | 'outlined';
//   text: string;
//   className?: string;
//   disabled?: boolean;
//   iconUrl?: string;
//   icon?: React.ReactElement;
//   containerClassName?: string;
//   onClick?: () => void;
//   loading?: boolean;
// }

const Btn = styled.button`
  & {
    min-width: 130px;
    height: 44px;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    z-index: 0;
    background: #fff;
    overflow: hidden;
    border: 2px solid #212529;
    color: #212529;
    font-weight: 600;
    border-radius: 8px;
    text-transform: capitalize;
    font-family: Roboto, arial, sans-serif;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #212529;
  }
  &:disabled:after {
    width: 100%;
  }
  &:disabled {
    color: #94a3b8;
  }
`;

const Button = ({
  type = "button",
  color = "primary",
  size = "medium",
  text = "Button",
  variant = "contained",
  className = "",
  disabled,
  iconUrl,
  icon,
  containerClassName,
  onClick,
  loading,
}) => {
  return (
    <React.Fragment>
      <div className={`${containerClassName}`}>
        <Btn
          variant={variant}
          color="primary"
          className={`btn ${color} ${size} ${variant} ${className}`}
          startIcon={
            icon ||
            (iconUrl ? <img className="" src={iconUrl} alt={"btn-icon"} /> : "")
          }
          type={type}
          disabled={disabled || loading}
          onClick={onClick}
        >
          {loading ? <Loader className={`text-loader`} size={"sm"} /> : text}
        </Btn>
      </div>
    </React.Fragment>
  );
};

export default Button;
