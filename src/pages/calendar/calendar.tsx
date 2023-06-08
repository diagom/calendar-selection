import React from "react";
import { Style } from "./calendar-style.ts";
import DayCell from "components/day";
import WeekHead from "components/week-head-line";

export const Calendar = () => {
  const monthMock = [...Array(30)];

  return (
    <>
      <Style.CalendarBorder>
        <WeekHead />
        {monthMock.map((x, dayNumber) => {
          return <DayCell day={dayNumber + 1} />;
        })}
      </Style.CalendarBorder>
    </>
  );
};

export default Calendar;
