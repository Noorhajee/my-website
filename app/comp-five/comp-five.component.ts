import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-five',
  templateUrl: './comp-five.component.html',
  styleUrls: ['./comp-five.component.css']
})
export class CompFiveComponent implements OnInit {
  @Input("data1") data1: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
