import styled from "styled-components";

const CalendarBorder = styled.div`
  max-width: 80vw;
  max-height: 80vh;

  margin: auto;
  padding: 10px;

  display: grid;
  grid-template-columns: repeat(7, 100fr);

  border: solid 2px blue;
  border-radius: 10px;
`;

export const Style = { CalendarBorder };
