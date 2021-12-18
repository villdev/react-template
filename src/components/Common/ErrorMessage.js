import React from "react";
import styled from "styled-components";

const ErrorMsg = styled.div`
  color: #b20000;
  font-size: 16px;
  white-space: pre-wrap;
  text-align: left;
  margin-bottom: 2rem;
`;

const ErrorMessage = ({ className = "", error }) => {
  return (
    <React.Fragment>
      {error && (
        <ErrorMsg className={`error-text ${className}`}>{error}</ErrorMsg>
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;
