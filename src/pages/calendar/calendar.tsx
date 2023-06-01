import React from "react";
import { Style } from "./calendar-style.ts";
import { DayCell } from "../../components/day/day-cell.tsx";

export const Calendar = () => {
  return (
    <>
      <Style.CalendarBorder>
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
        <DayCell day="1" /> <DayCell day="1" />
      </Style.CalendarBorder>
    </>
  );
};

export default Calendar;
