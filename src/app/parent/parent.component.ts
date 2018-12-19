import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public CData: string;
  constructor() { }

  // showFiles :boolean;
  
  // hide(){
  //   this.showFiles = false;
  // }
  // show(){
  //   this.showFiles = true;
  // }
  ngOnInit() {
  }
  // check(){
  //   if (confirm("Press a button!")) {
  //     this.showFiles=true;
  //   } else {
  //     this.showFiles=false;
  //   }
  // }
}
