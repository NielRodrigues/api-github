import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 576px){
    grid-template-columns: auto;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #F3F3F3;
  font-style: italic;
`;
