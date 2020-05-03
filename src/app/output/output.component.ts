import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() data:string;
  // data=data;
  flag=true;
  constructor() {
    
   }

  ngOnInit() {
  
}
toLower(){
  this.flag=!this.flag;
}

toUpper(){
  this.flag=!this.flag;
}
}