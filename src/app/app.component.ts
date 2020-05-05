import { Component ,Output,EventEmitter} from '@angular/core';
import {Question} from './question/question.model';
import {Article} from './article/article.model';
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
    this.articles=[];
  }
  changeFromChild(data){
  	console.log(data);
  	this.questions.push(data);
    this.questions.map(q=>this.articles.push(new Article(q)));
  }

  changeToQue(){
    return this.questions;
  }
  changeToArticle(){
    return this.articles;
  }

}
