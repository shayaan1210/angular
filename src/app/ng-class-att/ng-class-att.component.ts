import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-att',
  templateUrl: './ng-class-att.component.html',
  styleUrls: ['./ng-class-att.component.css']
})
export class NgClassAttComponent implements OnInit {
  myClass:any={
      box:true,
      border:false,
      rounded:true
  };
  constructor() { }

  ngOnInit(): void {
  }

changeValue(){
  this.myClass.rounded=!this.myClass.rounded;
  this.myClass.border=!this.myClass.border;
}


}
