import styled from "styled-components";

const dayBax = styled.div`
  height: 5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props) => props.theme.isSelected && "solid 2px orange"};
  border-bottom: solid 2px orange;
  border-radius: 10px;
  margin: 5px 10px;

  cursor: pointer;

  :hover {
    background-color: #303030;
  }
`;

export const Style = { dayBax };
