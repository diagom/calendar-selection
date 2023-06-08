import React from "react";
import { Style } from "./week-head-line-style.ts";

export const WeekHead = () => (
  <>
    <Style.weekCell>S</Style.weekCell>
    <Style.weekCell>M</Style.weekCell>
    <Style.weekCell>T</Style.weekCell>
    <Style.weekCell>W</Style.weekCell>
    <Style.weekCell>T</Style.weekCell>
    <Style.weekCell>F</Style.weekCell>
    <Style.weekCell>S</Style.weekCell>
  </>
);

export default WeekHead;
