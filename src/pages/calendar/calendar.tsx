import React, { useState } from "react";
import { Style } from "./calendar-style.ts";
import DayCell from "components/day";
import WeekHead from "components/week-head-line";

export const Calendar = () => {
  const [count, setCount] = useState(Array());
  const monthMock = [...Array(30)];

  const selectUnselectAction = (dayNumber: number) => {
    if (!count.includes(dayNumber)) {
      setCount([...count, dayNumber]);
    } else {
      setCount(count.filter((day) => day !== dayNumber));
    }
  };

  return (
    <>
      <Style.CalendarContainer>
        <WeekHead />
        {monthMock.map((x, dayNumber) => {
          return (
            <DayCell
              key={dayNumber}
              clickAction={() => selectUnselectAction(dayNumber)}
              isSelected={count.includes(dayNumber)}
              day={dayNumber + 1}
            />
          );
        })}
      </Style.CalendarContainer>
    </>
  );
};

export default Calendar;
