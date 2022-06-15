import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-seven',
  templateUrl: './comp-seven.component.html',
  styleUrls: ['./comp-seven.component.css']
})
export class CompSevenComponent implements OnInit {
  @Output() titleUpdated = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }
  // updateTitle(): void {
  //   this.title = 'new name';
  //   this.titleUpdated.emit(this.title);
  // }

}
