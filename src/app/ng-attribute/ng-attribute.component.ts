import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-attribute',
  templateUrl: './ng-attribute.component.html',
  styleUrls: ['./ng-attribute.component.css']
})
export class NgAttributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

mystyles={
  border:'1px solid red',
  backgroundColor:'red',
  fontSize:'25px'

}
setChange(){
console.log("hellk word");
  this.mystyles['border']="2px dotted blue"
  this.mystyles['backgroundColor']="blue";
}
}
