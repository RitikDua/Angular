import { Component ,Output,EventEmitter} from '@angular/core';
import {Question} from './question/question.model';
import {Article} from './article/article.model';
import {Answer} from './answer/answer.model';
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
    articles:Article[]

  // @Output() notify:EventEmitter<Question[]>=new EventEmitter<Question[]>();
    // question:Question;
  constructor(){
  	this.questions=[];
    this.articles=[
      new Article(new Question("How",new Answer("you",1))),
,     new Article(new Question("ow",new Answer("o",11))),
,     new Article(new Question("ow",new Answer("u",1))),
     new Article(new Question("Howasd")),
,     new Article(new Question("Howasd")),

    ];

  }
  changeFromChild(data){
  	console.log(data);
  	this.questions.push(data);
    this.questions.map(q=>this.articles.push(new Article(q)));
  }

  changeToQue(){
    return this.questions;
  }
  changeToArticles(){
    return this.articles;
  }

}
