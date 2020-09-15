import { Pipe, Inject, PipeTransform } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Pipe({
    name: 'assetspipe'
  })
  export class AssetsPipe implements PipeTransform{

        baseUrl: string;
        constructor() {
          this.baseUrl = '';
        } 
  
        transform(value: string) {
          const newval = this.baseUrl + value;
             return newval;
        }   
  }