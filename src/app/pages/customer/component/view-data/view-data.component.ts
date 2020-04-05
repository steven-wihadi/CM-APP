import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {

  @Input() viewMode: string;
  @Input() dataSet;
  maleIcon: string = '../../../../../assets/male.png';
  femaleIcon: string = '../../../../../assets/female.png';

  constructor() { }

  ngOnInit(): void {
    if(this.viewMode === undefined){ this.viewMode = 'card'; } 
  }

}
