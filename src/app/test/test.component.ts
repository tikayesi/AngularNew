import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testData: string = "hallo";
  testDataTwoWays = "test";
  constructor() { }

  ngOnInit() {
  }

  testAlert(){
    this.testData = this.testDataTwoWays;
    alert(this.testDataTwoWays);
  }

}
