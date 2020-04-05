import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalPage: number;
  @Input() activeNumber: number;
  @Output() onPageChange = new EventEmitter<number>();

  displayNumber = [];

  constructor() { }

  ngOnInit(): void {
    this.initializePagination();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.totalPage != undefined){
      this.totalPage = changes.totalPage.currentValue;
    }
    if(changes.activeNumber != undefined){
      this.activeNumber = changes.activeNumber.currentValue;
    }
    this.initializePagination();
  }

  initializePagination() {
    this.displayNumber = [];
    if(this.totalPage != undefined || this.totalPage != 0){
      if(this.activeNumber == undefined || this.activeNumber == 0) {
        this.activeNumber = 1;

        for(let number=0; number < this.totalPage; number++){
          if(this.displayNumber.length < 3){
            this.displayNumber.push(number + 1);
          }
        }
      }
      else {
        if(this.activeNumber <= this.totalPage){
          if(this.activeNumber == 1){
            this.displayNumber.push(this.activeNumber);
            this.displayNumber.push(this.activeNumber + 1);
            if(this.totalPage > 2){
              this.displayNumber.push(this.activeNumber + 2);
            }
          }
          else if(this.activeNumber > 1){
            this.displayNumber.push(this.activeNumber - 1);
            this.displayNumber.push(this.activeNumber);
            if(this.totalPage > 2){
              this.displayNumber.push(this.activeNumber + 1);
            }
          }
          else if(this.activeNumber == this.totalPage){
            this.displayNumber.push(this.activeNumber - 2);
            this.displayNumber.push(this.activeNumber - 1);
            this.displayNumber.push(this.activeNumber);
          }
          
          this.updateDisplayNumber(this.activeNumber);
        }
      }
    }
  }

  onClickNumberBtn(clickedNumber){
    this.activeNumber = clickedNumber;
    this.onPageChange.emit(clickedNumber);
    this.updateDisplayNumber(clickedNumber);
  }

  onClickSeekBtn(nextOrPrev){
    if(nextOrPrev === 'prev') {
      if(this.activeNumber != 1){
        this.activeNumber -= 1;
        this.onPageChange.emit(this.activeNumber);
        this.updateDisplayNumber(this.activeNumber);
      }
    }
    else if(nextOrPrev === 'next') {
      if(this.activeNumber != this.totalPage){
        this.activeNumber += 1;
        this.onPageChange.emit(this.activeNumber);
        this.updateDisplayNumber(this.activeNumber);
      }
    }
  }

  updateDisplayNumber(clickedNumber) {
    let positionIndex = this.displayNumber.findIndex((data)=>{ return data == clickedNumber });
    
    if(positionIndex == 0) {
      if(clickedNumber != 1) {
        this.displayNumber[0] = this.activeNumber - 1;
        this.displayNumber[1] = this.activeNumber;
        this.displayNumber[2] = this.activeNumber + 1;
      }
    }
    else if(positionIndex == 1) {
      //Do nothing
    }
    else if(positionIndex == 2) {
      if(clickedNumber != this.totalPage) {
        this.displayNumber[0] = this.activeNumber -1;
        this.displayNumber[1] = this.activeNumber;
        this.displayNumber[2] = this.activeNumber + 1;
      }
    }
  }

}
