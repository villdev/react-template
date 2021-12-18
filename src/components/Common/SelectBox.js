import React, { useState } from "react";
import styled from "styled-components";
import SelectDownIcon from "../../images/icon_select-down.svg";

// interface Props {
//   values: string[];
//   label?: string;
//   name?: string;
//   containerClass?: string;
//   className?: string;
//   placeholder?: string;
//   onChange: (value: string) => void;
//   error?: string;
//   tabIndex?: number;
//   disabled?: boolean;
//   createAllOption?: boolean;
//   value?: string;
// }

const SelectBoxContainer = styled.div`
  text-align: left;
  width: 100%;
`;

const SelectInput = styled.select`
  & {
    border: 1px solid #dddddd;
    height: 48px;
    width: 100%;
    border-radius: 8px;
    padding: 10px 26px 10px 10px;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${SelectDownIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 10px);
  }
  & option {
    color: #000000;
    border-radius: 8px;
    height: 40px;
  }
  &.selectbox--placeholder {
    color: #808080;
  }
  &:disabled {
    background-color: #f3f3f3;
  }
  &.error {
    border: 1px solid #b20000;
  }
`;

const ErrorText = styled.div`
  color: #b20000;
  font-size: 12px;
  margin-top: 0.5rem;
`;

const SelectBox = (props) => {
  const {
    values,
    className,
    onChange,
    label,
    name,
    placeholder,
    error,
    tabIndex,
    disabled,
    containerClass = "",
    createAllOption = false,
    value,
  } = props;

  const [currentValue, setCurrentValue] = useState(
    value || (placeholder ? "" : values[0])
  );

  return (
    <SelectBoxContainer className={containerClass}>
      {label && <div className="mb-1">{label}</div>}
      <SelectInput
        className={`${className} ${error ? "error" : ""} ${
          currentValue === "" && placeholder ? "selectbox--placeholder" : ""
        } icon_select-down`}
        value={currentValue}
        onChange={(e) => {
          const text = e.target.value;
          if (text === "All") {
            setCurrentValue("");
            onChange("");
          } else {
            setCurrentValue(text);
            onChange(text);
          }
        }}
        name={name}
        disabled={disabled}
        // ref={ref}
        {...(tabIndex ? { tabIndex: tabIndex } : {})}
      >
        {placeholder && (
          <option
            className="select_placeholder"
            value=""
            selected
            disabled
            hidden
          >
            {placeholder}
          </option>
        )}

        {createAllOption && <option value="All">Any</option>}
        {!createAllOption && values.length === 0 && (
          <option value="" disabled={true}>
            Nothing found
          </option>
        )}

        {values.map((value, _index) => {
          return (
            <option key={`${value + _index}`} value={value}>
              {value}
            </option>
          );
        })}
      </SelectInput>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectBoxContainer>
  );
};

export default SelectBox;
