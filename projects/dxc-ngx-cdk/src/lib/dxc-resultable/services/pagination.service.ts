import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  start= 0;

  end = 5; 

  calculatePagination(pageNumber: number,itemsPerPage: number,  callback){
    
    if (pageNumber === 0){
      callback({start:0, end: 5});
    }      
    callback({start: pageNumber * itemsPerPage - itemsPerPage , end: pageNumber * itemsPerPage});
  }

  constructor() { 


  }
}
