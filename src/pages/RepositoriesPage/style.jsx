import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  color: #F3F3F3;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: #0E0F11;
  min-width: 320px;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: #18181A;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 0 40px 0 40px;

  @media (max-width: 768px){
    min-height: 100%;
    padding: 40px 0 40px 0;
  }
  @media (max-width: 576px){
    padding: 40px 0 40px 0;

  }

`;
