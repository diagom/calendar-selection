import React from "react";
import { Style } from "./day-style.ts";

interface DayCell {
  day: number;
  clickAction: Function;
  isSelected: boolean;
}

export const DayCell = ({ day, clickAction, isSelected }: DayCell) => {
  return (
    <>
      <Style.dayBax theme={{ isSelected }} onClick={() => clickAction()}>
        <span>{day}</span>
      </Style.dayBax>
    </>
  );
};

export default DayCell;
