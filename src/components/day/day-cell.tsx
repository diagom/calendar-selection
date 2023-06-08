import React from "react";
import { Style } from "./day-style.ts";

interface DayCell {
  day: number;
  number?: number;
}

export const DayCell = ({ day }: DayCell) => {
  return (
    <>
      <Style.dayBax>
        <span>{day}</span>
      </Style.dayBax>
    </>
  );
};

export default DayCell;
