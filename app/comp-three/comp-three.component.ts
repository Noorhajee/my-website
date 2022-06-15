import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {

  @Output() titleUpdated = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
