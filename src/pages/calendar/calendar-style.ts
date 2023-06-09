import styled from "styled-components";

const CalendarContainer = styled.div`
  max-width: 80vw;
  max-height: 80vh;

  font-size: 30px;

  display: grid;
  grid-template-columns: repeat(7, 100fr);

  border: solid 2px blue;
  border-radius: 10px;
  margin: auto;
  padding: 10px;
`;

export const Style = { CalendarContainer };
