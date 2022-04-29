import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { Inject, Injectable, Optional, InjectionToken } from "@angular/core";
import { DateAdapter } from "@angular/material/core";
import { MatDateFormats, MAT_DATE_LOCALE } from "@angular/material/core";
/** Configurable options for {@see DayjsDateAdapter}. */
export interface DayjsDateAdapterOptions {
  /**
   * Turns the use of utc dates on or off.
   * Changing this will change how Angular Material components like DatePicker output dates.
   * {@default false}
   */
  useUtc: boolean;
}

export const DAYJS_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: "DD/MM/YYYY",
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMMM YYYY",
    dateA11yLabel: "DD/MM/YYYY",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

/** InjectionToken for dayjs date adapter to configure options. */
export const DAYJS_DATE_ADAPTER_OPTIONS =
  new InjectionToken<DayjsDateAdapterOptions>("DAYJS_DATE_ADAPTER_OPTIONS", {
    providedIn: "root",
    factory: DAYJS_DATE_ADAPTER_OPTIONS_FACTORY,
  });

/** @docs-private */
export function DAYJS_DATE_ADAPTER_OPTIONS_FACTORY(): DayjsDateAdapterOptions {
  return {
    useUtc: false,
  };
}

/** Creates an array and fills it with values. */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

/** Adapts dayjs Dates for use with Angular Material. */
@Injectable()
export class DayjsDateAdapter extends DateAdapter<dayjs.Dayjs> {
  // Note: all of the methods that accept a `dayjs` input parameter immediately call `this.clone`
  // on it. This is to ensure that we're working with a `dayjs` that has the correct locale setting
  // while avoiding mutating the original object passed to us. Just calling `.locale(...)` on the
  // input would mutate the object.

  private _localeData: {
    firstDayOfWeek: number;
    longMonths: string[];
    shortMonths: string[];
    dates: string[];
    longDaysOfWeek: string[];
    shortDaysOfWeek: string[];
    narrowDaysOfWeek: string[];
  };

  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string,
    @Optional()
    @Inject(DAYJS_DATE_ADAPTER_OPTIONS)
    private options?: DayjsDateAdapterOptions
  ) {
    super();
    dayjs.extend(localizedFormat);
    dayjs.extend(customParseFormat);
    dayjs.extend(localeData);
    dayjs.extend(relativeTime);

    this.setLocale(dateLocale);
  }

  setLocale(dateLocale: string): void {
    super.setLocale(dateLocale);

    const dayJsLocaleData = dayjs().localeData();
    this._localeData = {
      firstDayOfWeek: 0,
      longMonths: dayJsLocaleData.months(),
      shortMonths: dayJsLocaleData.monthsShort(),
      dates: range(31, (i) => this.createDate(2017, 0, i + 1).format("D")),
      longDaysOfWeek: dayJsLocaleData.weekdays(),
      shortDaysOfWeek: dayJsLocaleData.weekdaysShort(),
      narrowDaysOfWeek: dayJsLocaleData.weekdaysMin(),
    };
  }

  getYear(date: dayjs.Dayjs): number {
    return this.clone(date).year();
  }

  getMonth(date: dayjs.Dayjs): number {
    return this.clone(date).month();
  }

  getDate(date: dayjs.Dayjs): number {
    return this.clone(date).date();
  }

  getDayOfWeek(date: dayjs.Dayjs): number {
    return this.clone(date).day();
  }

  getMonthNames(style: "long" | "short" | "narrow"): string[] {
    // dayjs.js doesn't support narrow month names, so we just use short if narrow is requested.
    return style === "long"
      ? this._localeData.longMonths
      : this._localeData.shortMonths;
  }

  getDateNames(): string[] {
    return this._localeData.dates;
  }

  getDayOfWeekNames(style: "long" | "short" | "narrow"): string[] {
    if (style === "long") {
      return this._localeData.longDaysOfWeek;
    }
    if (style === "short") {
      return this._localeData.shortDaysOfWeek;
    }
    return this._localeData.narrowDaysOfWeek;
  }

  getYearName(date: dayjs.Dayjs): string {
    return this.clone(date).format("YYYY");
  }

  getFirstDayOfWeek(): number {
    return this._localeData.firstDayOfWeek;
  }

  getNumDaysInMonth(date: dayjs.Dayjs): number {
    return this.clone(date).daysInMonth();
  }

  clone(date: dayjs.Dayjs, format?: string): dayjs.Dayjs {
    return format ? dayjs(dayjs(date, format)) : date.clone();
  }

  new(date = undefined, format = undefined): dayjs.Dayjs {
    if (!date) {
      return dayjs();
    }
    if (format) {
      return dayjs(date, format);
    } else {
      return dayjs(date);
    }
  }

  createDate(year: number, month: number, date: number): dayjs.Dayjs {
    // dayjs.js will create an invalid date if any of the components are out of bounds, but we
    // explicitly check each case so we can throw more descriptive errors.
    if (month < 0 || month > 11) {
      throw Error(
        `Invalid month index "${month}". Month index has to be between 0 and 11.`
      );
    }
    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    const result = this._createDayjs({ year, month, date });
    // If the result isn't valid, the date must have been out of bounds for this month.
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }

  today(): dayjs.Dayjs {
    return this._createDayjs();
  }

  parse(value: any): dayjs.Dayjs | null {
    if (value && typeof value === "string") {
      return this._createDayjs(value);
    }
    return value ? this._createDayjs(value) : null;
  }

  format(date: dayjs.Dayjs, displayFormat: string): string {
    date = this.clone(date);
    if (!this.isValid(date)) {
      throw Error("DayjsDateAdapter: Cannot format invalid date.");
    }
    return date.format(displayFormat);
  }

  addCalendarYears(date: dayjs.Dayjs, years: number): dayjs.Dayjs {
    return this.clone(date).add(years, "year");
  }

  addCalendarMonths(date: dayjs.Dayjs, months: number): dayjs.Dayjs {
    return this.clone(date).add(months, "month");
  }

  addCalendarDays(date: dayjs.Dayjs, days: number): dayjs.Dayjs {
    return this.clone(date).add(days, "day");
  }

  toIso8601(date: dayjs.Dayjs): string {
    return this.clone(date).toISOString();
  }

  /**
   * Returns the given value if given a valid dayjs or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid dayjss and empty
   * string into null. Returns an invalid date for all other values.
   */
  deserialize(value: any): dayjs.Dayjs | null {
    let date;
    if (value instanceof Date) {
      date = this._createDayjs(value).locale(this.locale);
    } else if (this.isDateInstance(value)) {
      // Note: assumes that cloning also sets the correct locale.
      return this.clone(dayjs(value, "DD/MM/YYYY"));
    }
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      date = this._createDayjs(value).locale(this.locale);
    }
    if (date && this.isValid(date)) {
      return this._createDayjs(date).locale(this.locale);
    }
    return super.deserialize(value);
  }

  isDateInstance(obj: any): boolean {
    return dayjs.isDayjs(obj);
  }

  isValid(date: dayjs.Dayjs): boolean {
    return this.clone(date).isValid();
  }

  invalid(): dayjs.Dayjs {
    return dayjs(null);
  }

  /** Creates a dayjs instance */
  private _createDayjs(args?: any): dayjs.Dayjs {
    if (dayjs.isDayjs(args)) {
      return this.clone(args);
    } else if (args instanceof Date) {
      return this.clone(dayjs(args));
    } else {
      let djs = dayjs();
      let key: any;
      for (key in args) {
        if (args.hasOwnProperty(key)) {
          djs = djs.set(key, args[key]);
        }
      }
      return this.clone(djs, "DD/MM/YYYY");
    }
  }
}
