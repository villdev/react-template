import React from "react";
import styled from "styled-components";

// interface Props {
//   value?: string;
//   label?: string;
//   name?: string;
//   containerClass?: string;
//   className?: string;
//   placeholder?: string;
//   onChange: (value: string) => void;
//   error?: string;
//   maxLength?: number;
//   disabled?: boolean;
//   rows?: number;
// }

const TextAreaContainer = styled.div`
  text-align: left;
  width: 100%;
`;

const TextAreaInput = styled.textarea`
  & {
    border: 1px solid #dddddd;
    width: 100%;
    border-radius: 8px;
    padding: 10px;
  }
  &.error {
    border: 1px solid #b20000;
  }
  &:placeholder {
    color: #808080;
  }
`;

const ErrorText = styled.div`
  color: #b20000;
  font-size: 12px;
  margin-top: 0.5rem;
`;

const TextArea = ({
  value,
  className,
  onChange,
  label,
  name,
  placeholder,
  error,
  maxLength,
  disabled,
  containerClass = "",
  rows = 5,
}) => {
  return (
    <TextAreaContainer className={containerClass}>
      {label && <div className="mb-1">{label}</div>}
      <TextAreaInput
        rows={rows}
        className={`${className} ${error ? "error" : ""}`}
        defaultValue={value}
        onChange={(e) => {
          const text = e.target.value;
          onChange(text);
        }}
        disabled={disabled}
        name={name}
        maxLength={maxLength || 50}
        placeholder={placeholder || "Enter value here.."}
      ></TextAreaInput>
      {error && <ErrorText>{error}</ErrorText>}
    </TextAreaContainer>
  );
};

export default TextArea;
