import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  @Input() people;

  constructor() { }

  ngOnInit() {
  }

}