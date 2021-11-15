import { ConfigurationsetupService } from './../../../services/startup/configurationsetup.service';
import { Component, OnInit, Input, Output, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { EPaging } from '../../../models/grid/grid.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'dxc-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() pageSize: number;
  @Input() totalCount: number;
  @Output() pagingCall = new EventEmitter();


  pageNumber = 0;
  minPageNumber = 0;
  maxPageNumber = 0;
  pageValue: number;
  globalResource: { [key: string]: { description: string, type: string } };

  constructor(private changeDetectionRef: ChangeDetectorRef, private config: ConfigurationsetupService) {

  }

  ngOnChanges(changes: SimpleChanges) {
      let isChanges = false;
      if (changes.pageSize && changes.pageSize.firstChange || (changes.pageSize.currentValue !== changes.pageSize.previousValue)) {
          isChanges = true;
      }
      if (changes.totalCount && changes.totalCount.firstChange || (changes.totalCount.currentValue !== changes.totalCount.previousValue)) {
          isChanges = true;
      }
      if (isChanges) {
          this.changeDetectionRef.markForCheck();
      }
  }

  ngOnInit() {
    this.globalResource = this.config.configservice.Resources;
    if (this.pageSize <= 0 || this.totalCount <= 0) {
          throw new Error(('Paging Configuration is missing.'));
      }
      this.maxPageNumber = Math.floor(this.totalCount / this.pageSize);
      this.pageValue = this.pageNumber + 1;
  }

  pagination(action) {
      switch (action) {
          case EPaging.FIRST:
              if (this.pageNumber === 0) {
                  return;
              }
              this.pageNumber = 0;
              this.pageValue = this.pageNumber + 1;
              break;
          case EPaging.PREVIOUS:
              if (this.pageNumber === 0) {
                  return;
              }
              this.pageNumber -= 1;
              this.pageValue = this.pageNumber + 1;
              break;
          case EPaging.NEXT:
              const pageNum: number = this.pageNumber;
              const pageSize: number = this.pageSize;
              const totalRecords: number = this.totalCount;
              const currentTotal: number = (pageNum + 1) * pageSize;
              if (currentTotal < totalRecords) {
                  this.pageNumber += 1;
                  this.pageValue = this.pageNumber + 1;
              } else {
                  return;
              }
              break;
          case EPaging.LAST:
              if (this.pageNumber < this.maxPageNumber) {
                  this.pageNumber = this.maxPageNumber;
                  this.pageValue = this.pageNumber + 1;
              }
              break;
          case EPaging.MOVETO:
              if (this.minPageNumber < this.maxPageNumber) {
                  this.pageNumber = this.minPageNumber;
              } else {
                  return;
              }
              break;
          default:
              break;
      }
      ////this.pagingCall.emit(this.pageNumber);
  }
}
