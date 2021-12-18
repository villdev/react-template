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
//   autoComplete?: string;
//   maxLength?: number;
//   tabIndex?: number;
//   disabled?: boolean;
//   type?: string;
//   onFileChange?: (file: File) => void;
//   acceptFiles?: string;
//   // customRef?: HTMLInputElement;
// }

const TextInputContainer = styled.div`
  text-align: left;
  width: 100%;
`;

const TextInput = styled.input`
  & {
    border: 1px solid #dddddd;
    height: 48px;
    width: 100%;
    border-radius: 8px;
    padding: 10px;
  }
  &:placeholder {
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

const TextBox = ({
  value,
  className,
  onChange,
  label,
  name,
  placeholder,
  error,
  autoComplete,
  maxLength,
  tabIndex,
  disabled,
  containerClass = "",
  type,
  onFileChange,
  acceptFiles,
  // customRef,
}) => {
  return (
    <TextInputContainer className={containerClass}>
      {label && <div className="mb-1">{label}</div>}
      <TextInput
        accept={acceptFiles}
        type={type}
        {...(tabIndex ? { tabIndex: tabIndex } : {})}
        // ref={ref}
        autoComplete={autoComplete || "off"}
        className={`textbox  ${className} ${error ? "error" : ""}`}
        defaultValue={value}
        onChange={(e) => {
          if (type === "file") {
            onFileChange && e.target.files && onFileChange(e.target.files[0]);
          }
          const text = e.target.value;
          onChange(text);
        }}
        disabled={disabled}
        name={name}
        maxLength={maxLength || 50}
        placeholder={placeholder || "Enter value here.."}
      ></TextInput>
      {error && <ErrorText>{error}</ErrorText>}
    </TextInputContainer>
  );
};

export default TextBox;
