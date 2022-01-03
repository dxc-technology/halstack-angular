import { Injectable } from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../utils";

@Injectable()
export class DxcDateInputHelper {
  constructor(private utils: CssUtils) {}

  getDynamicStyle(inputs) {
    return css``;
  }

  getCalendarContentStyle() {
    return css`
      width: var(--newDate-pickerWidth);
      dxc-box {
        background: var(--newDate-pickerBackgroundColor);
        height: var(--newDate-pickerHeight);
        display: inline-block;
      }
      .mat-calendar {
        width: 100%;
        height: 100%;
      }
      .mat-calendar-content {
        height: 88%;
        padding: 0 8px 0px 8px;
      }
      .mat-calendar-table {
        height: 100%;
      }
      .mat-calendar-header {
        color: var(--newDate-color);
        padding: 0px;
        margin-bottom: 5px;
        .mat-calendar-controls {
          margin: 0px;
        }
        .mat-calendar-arrow {
          margin-left: 8px;
        }
      }
      .mat-calendar-table-header-divider::after {
        left: 0px;
        right: 0px;
      }

      .mat-calendar-table-header th {
        font-size: 12px;
      }

      .mat-calendar-period-button {
        font-size: 16px;
      }
      .mat-calendar-body-today:not(.mat-calendar-body-selected) {
        border-color: var(--newDate-pickerActualDateColor);
      }
      .mat-calendar-body-selected {
        border-color: var(--newDate-pickerSelectedDateBackgroundColor);
        background-color: var(--newDate-pickerSelectedDateBackgroundColor);
        color: var(--newDate-pickerSelectedDateColor) !important;
        &.mat-calendar-body-today {
          border: none;
          box-shadow: none;
        }
      }
      .mat-calendar-body-cell-content,
      .mat-button-wrapper,
      .mat-calendar-body-label,
      .mat-calendar-table-header,
      th {
        font-family: var(--newDate-fontFamily);
      }

      .mat-calendar-previous-button,
      .mat-calendar-next-button {
        background: var(--newDate-pickerBackgroundColorMonthArrows);
      }

      .mat-calendar-table-header {
        color: var(--newDate-pickerWeekLabelColor);
      }

      .mat-calendar-body-label {
        color: var(--newDate-pickerMonthColor);
      }

      .mat-calendar-period-button {
        color: var(--newDate-pickerYearColor);
      }

      .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover
        > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
      .cdk-keyboard-focused
        .mat-calendar-body-active
        > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
      .cdk-program-focused
        .mat-calendar-body-active
        > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {
        background-color: transparent;
      }

      mat-month-view .mat-calendar-body-cell-content {
        width: 28px;
        height: 28px;
        color: var(--newDate-pickerFontColor);
      }

      td:not(.mat-calendar-body-disabled) .mat-calendar-body-cell-content:focus,
      .mat-calendar-previous-button:focus,
      .mat-calendar-next-button:focus,
      .mat-calendar-period-button:focus {
        outline: -webkit-focus-ring-color auto 1px;
        outline-color: var(--newDate-focusColor);
      }

      .mat-button-focus-overlay {
        background: none;
      }

      .mat-calendar-period-button:hover,
      .mat-calendar-previous-button:hover,
      .mat-calendar-next-button:hover {
        background: #0000000a;
      }

      .mat-button-wrapper {
        font-weight: bold;
      }

      td:not(.mat-calendar-body-disabled) .mat-calendar-body-cell-content {
        &:not(.mat-calendar-body-selected):hover {
          background-color: var(
            --newDate-pickerHoverDateBackgroundColor
          ) !important;
          color: var(--newDate-pickerHoverDateFontColor) !important;
        }
        mat-multi-year-view .mat-calendar-body-cell-content,
        mat-year-view .mat-calendar-body-cell-content {
          width: 55px;
          height: 33px;
        }
        .mat-calendar-period-button {
          padding: 0px;
          height: 34px;
          width: 94px;
          &:hover {
            background: #00000012;
          }
        }
      }
    `;
  }
}
