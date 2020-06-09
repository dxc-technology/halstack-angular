import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  start= 0;

  end = 5; 

  constructor() {}

  calculatePagination(pageNumber: number,itemsPerPage: number,  callback){
    if (pageNumber === 0){
      callback({start:0, end: 5});
    }
    this.start = pageNumber * itemsPerPage - itemsPerPage;    
    this.end = pageNumber * itemsPerPage;    
    callback({start: this.start , end: this.end});
  }

  getCurrentStart(){
    return this.start;
  }

  getCurrentEnd(){
    return this.end;
  }
}
