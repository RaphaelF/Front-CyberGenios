import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormItem = styled.input`
  width: 20.2rem;
  height: 2.5rem;
  border: 1px solid #1d2527;
  box-sizing: border-box;
  background: transparent;
  padding: 1rem;
  border-radius: 6px;
`;

export const Label = styled.label`
  position: absolute;
  left: 0px;
  top: -70%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: #808080;
`;
