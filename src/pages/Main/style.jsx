import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background-color: #0E0F11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 130px;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #f3f3f3;
  font-weight: 600;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 583px;
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const Input = styled.input`
  background-color: #18181A;
  color: #f3f3f3;
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;

  &::placeholder{
    color:#858687;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  color: #f3f3f3;
  cursor: pointer;
  border: 3px solid #f3f3f3;
  transition: all background 0.3s;

  &:hover{
    color: #18181A;
    background: #f3f3f3;
  }
`;
