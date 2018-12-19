import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-testlagi',
  templateUrl: './testlagi.component.html',
  styleUrls: ['./testlagi.component.css']
})
export class TestlagiComponent implements OnInit {
data: String = "default";
@Input() PData: string="";
@Output() childEvent = new EventEmitter();
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=> {
        this.data = params['testData'];
      }
    );
  }

}
