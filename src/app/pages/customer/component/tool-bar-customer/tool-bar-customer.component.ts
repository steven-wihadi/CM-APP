import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tool-bar-customer',
  templateUrl: './tool-bar-customer.component.html',
  styleUrls: ['./tool-bar-customer.component.scss']
})
export class ToolBarCustomerComponent implements OnInit {

  @Output() onChangeViewMode = new EventEmitter<string>();
  @Output() onAddCustomer = new EventEmitter();
  @Output() onKeyupInputFilter = new EventEmitter<string>();
  @Input() activeView: string;

  constructor() { }

  ngOnInit(): void {
    if(this.activeView == undefined) { this.activeView = 'card'; }
  }

  onClickViewMode(viewMode: string): void {
    this.onChangeViewMode.emit(viewMode);
    this.activeView = viewMode;
  }

  onClickAddCustomer(): void {
    this.onAddCustomer.emit();
  }

  onChangeInputFilter(inputFilter: string) {
    this.onKeyupInputFilter.emit(inputFilter);
  }

}
