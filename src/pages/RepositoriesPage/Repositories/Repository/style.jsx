import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0E0F11;
  border-left: 3px solid ${(props) => props.color || "#C2C3C3"};
  padding: 16px;

  @media (max-width: 576px){
    margin: 0px 16px;
  }
`;

export const Name = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top:0;
  margin-bottom: 8px;
  padding-top:0;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  margin: 16px 0;
  margin-top:0;
  padding-top:0;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.color || "#C2C3C3"};
  font-size: 14px;
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;
