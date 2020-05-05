import { Component, OnInit } from '@angular/core';
import {Article} from '../article/article.model';
import {Question} from '../question/question.model';
import {Answer} from '../answer/answer.model';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  articles:Article[]
  constructor() {

  	this.articles=[
  	new Article(new Question("What is your name",new Answer("Ritik Dua",9))),
  	new Article(new Question("What is your name",new Answer("Ritik Dua",9))),
  	new Article(new Question("What is your Age"))
  	]
   	console.log(this.articles);
   }
   getArticles():Article[]{
   	// console.log(this.articles.filter(w=>w.question.isAnswered()));
   	return this.articles.filter(x=>!x.question.isAnswered());//filter(w=>w.question.isAnswered());
   }
  ngOnInit(): void {
  }

}
