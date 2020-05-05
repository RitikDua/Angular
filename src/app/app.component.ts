import { Component ,Output,EventEmitter} from '@angular/core';
import {Question} from './question/question.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quora';
  choice="Home";
  question:Question;
  questions:Question[];
  // @Output() notify:EventEmitter<Question[]>=new EventEmitter<Question[]>();
    // question:Question;
  constructor(){
  	this.questions=[];
  }
  changeFromChild(data){
  	console.log(data);
  	this.questions.push(data);
  }

  changeToChild(){
    return this.questions;
  }

}
