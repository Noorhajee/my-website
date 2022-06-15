import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-tow',
  templateUrl: './comp-tow.component.html',
  styleUrls: ['./comp-tow.component.css']
})
export class CompTowComponent implements OnInit {
  @Input('data') data!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
