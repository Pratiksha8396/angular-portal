import { Component, OnInit } from '@angular/core';
import * as data from './../../shared/constant-files/constants'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  testDetails: any[] = [];
  selectedTest: any;
  constructor() { }

  ngOnInit() {
    this.testDetails = data.testQuestions;
  }

  onTestSelected(test) {
    console.log(test);
    this.selectedTest = test
  }

}
