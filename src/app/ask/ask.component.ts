import { Component, EventEmitter,OnInit,Input ,Output} from '@angular/core';
import {Question} from "../question/question.model";
import {Answer} from "../answer/answer.model";
@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  @Input() question:Question;
  @Output() notify:EventEmitter<Question>=new EventEmitter<Question>();;
  // question:Question;
  questionValue:string;
  constructor() { this.questionValue='';}
  addInput(post:HTMLInputElement):boolean{
  	// this.notify=
  	this.question=(new Question(post.value,new Answer("",0)));
  	console.log(post.value);
  	 post.value='';
  	this._sendToParent();
  	return false;
  }
  _sendToParent(){
  	this.notify.emit(this.question);
  }
  ngOnInit(): void {
  }

}
