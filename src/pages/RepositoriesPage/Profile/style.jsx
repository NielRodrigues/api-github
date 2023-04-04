import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  @media(max-width: 768px){
    flex-direction: row;
    align-items: center;
  }
`;

export const ProfilePhoto = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  height: auto;
  margin-bottom: 16px;

  @media(max-width: 768px){
    width: 70px;
    height: 70px;
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export const User = styled.h1`
  font-size: 20px;
  color: #F3F3F3;
  font-weight: 600;
  margin-bottom: 0;
`;

export const Name = styled.h2`
  font-size: 16px;
  color: #F3F3F3;
  font-weight: 400;
  margin-top:0;

  @media(max-width: 768px){
    display: none;
  }
`;

export const Inner = styled.div`
  @media(max-width: 768px){
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 20px;
  margin: 0;

  svg {
    margin-right: 8px;
  }

  a{
    color: #F3F3F3;
  }
`;
