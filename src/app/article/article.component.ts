import { Component, OnInit,Input } from '@angular/core';
import {Question} from '../question/question.model';
import {Article} from './article.model'
import {Answer} from '../answer/answer.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;
  // question:Question;
  // answer:Answer;
  constructor() {
// this.article=article;
// console.log(this.article);
  // this.question=this.article.question;
  // this.answer=this.question.answer;

   }

  ngOnInit(): void {
  	console.log(this.article);
  }

}
