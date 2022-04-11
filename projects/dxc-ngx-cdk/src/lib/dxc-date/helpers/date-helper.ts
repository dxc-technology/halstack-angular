import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
// import { MessageService } from '../../services/toaster/message.service';
// import { LocalStorageService } from '../../../claims-localstorage/services/localstorage.service';
import * as moment_ from 'moment';
const moment = moment_;

@Injectable({
  providedIn: 'root'
})
export class DateHelper {
   
    constructor(private datePipe: DatePipe,
      // To Do // private messageService: MessageService, 
      //   private _localStorageService: LocalStorageService
        ) {
      }

    public convertDateToControlFormat(date: string, userFormat: string): string {
        let returnDate: string;
        if (date && date != '') {
          let year = date.substring(0, 4);
          let month = (parseInt(date.substring(4, 6)) - 1).toString();
          let day = date.substring(6, 8);
          let dateDbDate = new Date(parseInt(year), parseInt(month), parseInt(day));
          returnDate = this.datePipe.transform(dateDbDate, userFormat);
        }
        return returnDate;
      }
    
      public convertDateToUserFormat(dateValue: Date): string {
        let returnDate = '';
    
        if (dateValue && dateValue != null) {
          let monthYear = dateValue.getMonth() + 1;
          let month = monthYear < 10 ? '0' + monthYear : monthYear;
          let day = dateValue.getDate() < 10 ? '0' + dateValue.getDate() : dateValue.getDate();
          let year = dateValue.getFullYear();
          returnDate = `${year}${month}${day}`;
        }
        return returnDate;
      }
    
      public convertDateToUserFormatString(dateValue: string): string {
        let returnDate = '';
        if (dateValue && dateValue != null) {
    
          let year = dateValue.substring(6, 10);
          let month = dateValue.substring(3, 5);
          let day = dateValue.substring(0, 2);
          return `${year}${month}${day}`;
        }
        return returnDate;
      }
    
      public dateLostFocus(dateValue: any, userFormat: string): string {
        var format = userFormat.replace('YYYY', 'yy').replace('yyyy', 'yy');
        var format1 = format.substr(0, 2).toUpperCase();
        var format2 = format.substr(3, 2).toUpperCase();
        var format3 = format.substr(6, 4).toUpperCase();
        var sDateSeparator = format.substr(2, 1);
        var iDayPos = 0, iMonthPos = 0;
        var d = new Date(1999, 11, 22);
        var s = d.toLocaleString();
        var sRet = '';
        var sDate = dateValue;
        if (sDate == '') {
          return '';
        }
        if (sDate.length == 4 && sDate.indexOf('/') == -1) {
          sDate = '0' + sDate.substr(0, 1) + '/' + '0' + sDate.substr(1, 1) + '/' + sDate.substr(2, 2);
        } else if (sDate.length == 6 && sDate.indexOf('/') == -1) {
          sDate = sDate.substr(0, 2) + '/' + sDate.substr(2, 2) + '/' + sDate.substr(4, 4);
        } else if (sDate.length == 8 && sDate.indexOf('/') == -1) {
          if (format1 != 'YY') {
            sDate = sDate.substr(0, 2) + '/' + sDate.substr(2, 2) + '/' + sDate.substr(4, 4);
          } else {
            if (format2 == 'MM' || format2 == 'mm')
              sDate = sDate.substr(0, 4) + '/' + sDate.substr(4, 2) + '/' + sDate.substr(6, 2);
            else
              sDate = sDate.substr(0, 4) + '/' + sDate.substr(6, 2) + '/' + sDate.substr(4, 2);
          }
        } else if (sDate.length == 10 && sDate.indexOf('/') == -1) {
          var re = new RegExp('\\' + sDateSeparator, 'g');
          var stringSep = '/';
          sDate = sDate.replace(re, stringSep);
        }
        var iMonth = 0, iDay = 0, iYear = 0;
        var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        iDayPos = s.indexOf('22');
        iMonthPos = s.indexOf('11');
        sDateSeparator = '/';
        var sArr = sDate.split(sDateSeparator);
        var dArr = new Array();
        if (sArr.length == 3) {
          //Rakhel - Modified for ML - Start
          if (format1.substring(0, 1) === 'D') {
            dArr[1] = new String(parseInt(sArr[0], 10));
            if (format3.substring(0, 1) === 'Y') {
              // ddmmyy
              dArr[0] = new String(parseInt(sArr[1], 10));
              dArr[2] = new String(parseInt(sArr[2], 10));
            } else {
              //ddyymm
              dArr[0] = new String(parseInt(sArr[2], 10));
              dArr[2] = new String(parseInt(sArr[1], 10));
            }
          }
          if (format1.substring(0, 1) === 'M') {
            dArr[0] = new String(parseInt(sArr[0], 10));
            if (format3.substring(0, 1) === 'Y') {
              // mmddyy
              dArr[1] = new String(parseInt(sArr[1], 10));
              dArr[2] = new String(parseInt(sArr[2], 10));
            } else {
              //mmyydd
              dArr[1] = new String(parseInt(sArr[2], 10));
              dArr[2] = new String(parseInt(sArr[1], 10));
            }
          }
          if (format1.substring(0, 1) === 'Y') {
            dArr[2] = new String(parseInt(sArr[0], 10));
            if (format3.substring(0, 1) === 'M') {
              // yyddmm
              dArr[1] = new String(parseInt(sArr[1], 10));
              dArr[0] = new String(parseInt(sArr[2], 10));
            } else {
              //yymmdd
              dArr[1] = new String(parseInt(sArr[2], 10));
              dArr[0] = new String(parseInt(sArr[1], 10));
            }
          }
          dArr[2] = this.Get4DigitYear(dArr[2]);
          var valid = true;
          if (dArr[0] < 1 || dArr[0] > 12)
            valid = false;
          else if (dArr[1] < 1 || dArr[1] > 31)
            valid = false;
          else if (dArr[2] < 1900 || dArr[2] > 9999)
            valid = false;
          else if ((dArr[0] == 4 || dArr[0] == 6 || dArr[0] == 9 || dArr[0] == 11) && dArr[1] > 30)
            valid = false;
          else if (dArr[0] == 2 && (dArr[2] % 400 == 0 || dArr[2] % 4 == 0) && dArr[2] % 100 != 0 && dArr[1] > 29)
            valid = false;
          else if (dArr[0] == 2 && dArr[2] % 100 == 0 && dArr[1] > 29)
            valid = false;
          if (!valid || (dateValue instanceof Date && dateValue.getFullYear() < 1990 )) {
            var msg = 'Please enter a valid date greater than or equal to ' + this.datePipe.transform(new Date(1900, 0, 1), userFormat);
            // To Do // this.messageService.Error(msg);
            return '';
          }
          var inst = Object();
          inst.currentDay = parseInt(dArr[1]);
          inst.currentMonth = parseInt(dArr[0]) - 1;
          inst.currentYear = parseInt(dArr[2]);
          if (isNaN(inst.currentDay) || isNaN(inst.currentMonth) || isNaN(inst.currentYear)) {
            return '';
          }
          if (inst.currentDay < 10) {
            inst.currentDay = '0' + inst.currentDay;
          }
          if (inst.currentMonth < 10) {
            inst.currentMonth = '0' + inst.currentMonth;
          }
          var newDate = new Date(inst.currentYear, inst.currentMonth, inst.currentDay);
          var dateStr = this.datePipe.transform(newDate, userFormat);
          return dateStr;
        } else {
          return '';
        }
      }
    
      private Get4DigitYear(sInputYear): string {
        var sGuessedYear = sInputYear;
        var dCurrentDate = this.getSystemOverrideDate();
        //var dCurrentDate = new Date();
        var iCurrentYear = dCurrentDate.getFullYear();
        var sCurrentYear = new String(iCurrentYear);
        if (sInputYear.length == 1) {
          sInputYear = '0' + sInputYear;
        }
        if (sInputYear.length < 3) {
          sGuessedYear = sCurrentYear.substr(0, 4 - sInputYear.length) + sInputYear;
          var iGuessedYear = parseInt(sGuessedYear);
          if (iGuessedYear - iCurrentYear > 20) {
            iGuessedYear = iGuessedYear - 100;
            sGuessedYear = new String(iGuessedYear);
          }
        }
        return sGuessedYear;
      }
    
      getSystemOverrideDate(): Date {
        var dCurrentDateTime = new Date();
        let sSystemDate = null;
        // To Do //  let sSystemDate = this._localStorageService.get('systemOverrideDate');
        if (!sSystemDate) {
          return dCurrentDateTime;
        } else {
          var overrideDate = new Date(sSystemDate.toString());
          if (!(overrideDate instanceof Date && overrideDate)) {
            return dCurrentDateTime;
          } else {
            var _dSystemDate = new Date(sSystemDate.toString());
            _dSystemDate.setHours(dCurrentDateTime.getHours());
            _dSystemDate.setMinutes(dCurrentDateTime.getMinutes());
            _dSystemDate.setSeconds(dCurrentDateTime.getSeconds());
            _dSystemDate.setMilliseconds(dCurrentDateTime.getMilliseconds());
            return _dSystemDate;
          }
        }
      }
}
