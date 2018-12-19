import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@Angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() PData: string;
  @Input() PData2: string;
  @Output() childEvent = new EventEmitter();
  showFiles :boolean;
  
  constructor() { }
  onChange(value) {
    this.childEvent.emit(value);
  }
  ngOnInit() {
  }
  check(){
    if (confirm("Apakah anda ingin mengirim output data?")) {
      this.showFiles=false;
    } else {
      this.showFiles=true;
    }
  }
  
}
