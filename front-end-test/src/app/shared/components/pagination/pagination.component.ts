import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface MyPagination {
  itemsCount: number;
  pageSize: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  public pagesArray: Array<number> = [];
  public currentPage: number = 1;
  @Output() goToPage = new EventEmitter<number>();

  @Input() set setPagination(pagination: MyPagination) {
    if (pagination) {
      const pagesAmount = Math.ceil(
        pagination.itemsCount / pagination.pageSize
      );
      this.pagesArray = new Array(pagesAmount).fill(1);
    }
  }
  public setPage(pageNumber: number): void {

    if (pageNumber === this.currentPage)
      return;
    console.log(pageNumber, this.currentPage)

    this.currentPage = pageNumber;
    this.goToPage.emit(pageNumber);
  }
}
