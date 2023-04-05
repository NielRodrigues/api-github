import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 3px;
  margin: 16px auto
  padding-right: 16px;

  @media (max-width: 768px){
    grid-template-columns: auto auto;
    gap: 12px;
    padding: 0 16px;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #18181A;
  color: ${(props) => props.color || "#F3F3F3"};
  width: 90%;
  min-height: 32px;
  border: none;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  transition: all .3s;
  transform: .3s;
  cursor: pointer;


  & span{
    font-weight: 600;
  }

  &:hover, &.selected{
    background-color: ${(props) => props.color || "#E9ECEf"};
    color: ${(props) => props.color ? "#F3F3F3" : "#0E0F11"};
    transform: translateX(5px) scale(1.02);
  }

  @media (max-width: 768px){
    border-radius: 16px;

    &:hover, &.selected{
      transform: translateX(0) scale(1.02);
    }
  }
`;


export const Cleaner = styled.button`
  background-color: transparent;
  color: #F3F3F3;
  border:none;
  margin-top: 16px;
  text-align: left;
  padding: 0px;
  cursor: pointer;

  &:hover{
    color: #F3F3F350;
  }
  @media (max-width: 768px){
    text-align: center;
    padding: 0 16px;
  }
`;
