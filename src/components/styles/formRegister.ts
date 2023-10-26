import styled from "styled-components";

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: grid;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  background: #007bff;
  color: aliceblue;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const ErrorText = styled.p`
  font-size: 14px;
  margin-top: 5px;
  color: red;
`;

export const Link = styled.div`
  display: inline-flex;
  text-decoration: none;
  text-align: center;
  margin-top: 16px;
`;