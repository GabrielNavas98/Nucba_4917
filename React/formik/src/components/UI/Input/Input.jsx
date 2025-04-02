import React from "react";
import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";
import { Field } from "formik";

const Input = ({ label, type, name, isError, ...field }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field 
        error={isError}
        type={type} 
        id={label} 
        name={name} 
        {...field}
        as={InputStyled}
      />

      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default Input;
