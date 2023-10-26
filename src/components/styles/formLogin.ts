import styled from "styled-components";

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Div = styled.div`
  margin-bottom: 15px;
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

export const Link = styled.div`
  display: inline-flex;
  text-decoration: none;
`;

export const LinkP = styled.p`
  color: #000;
  text-decoration: none;
`;

export const LinkA = styled.a`
  color: #007bff;
  margin: 4px;
  text-decoration: none;
`;

export const ErrorText = styled.p`
  color: red;
`;