import styled, {keyframes} from "styled-components";

export const Animation = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(8px, -8px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: #0E0F11;
  color: #F3F3F3;
`;

export const Logo = styled.img`
  width: 128px;
  height: 128px;
  animation: ${Animation} infinite 2s linear;
  margin: 0;
`;

export const LoadingTitle = styled.h4`
  font-size: 20px;
  color: #F3F3F3;
  font-style: italic;
  margin: 0;
`;

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
  overflow-y: auto;
`;

export const Main = styled.section`
  background: #18181A;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 0 40px 0 40px;
  overflow-y: auto;

  @media (max-width: 768px){
    min-height: 100%;
    padding: 40px 0 40px 0;
  }
  @media (max-width: 576px){
    padding: 40px 0 40px 0;

  }

`;
