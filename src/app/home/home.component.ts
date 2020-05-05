import { Input,Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Article} from '../article/article.model';
import {Question} from '../question/question.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() questions:Question[];
  // @Output() notify:EventEmitter<Question[]>=new EventEmitter<Question[]>();

  constructor() { }

  ngOnInit(): void {
  // console.log(data);
  	
console.log(this.questions);
  
  }
  
  changeToChild(data){
  	console.log(data);
  	
  }

}
