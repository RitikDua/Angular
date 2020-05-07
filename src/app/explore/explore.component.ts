import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';
import {Article} from '../article/article.model';
import {Question} from '../question/question.model';
import {Answer} from '../answer/answer.model';
// import {Ask} from '../'
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  @Input() questions:Question[];
  @Input() articles:Article[];
  @Output() notify:EventEmitter<Article[]>=new EventEmitter<Article[]>();
  // articles:Article[]
  constructor() {

  }
      getArticles():Article[]{
   	// console.log(this.articles.filter(w=>w.question.isAnswered()));
   	return this.articles.filter(x=>!x.question.isAnswered());//filter(w=>w.question.isAnswered());
   }
   submitAns(ans:HTMLInputElement,article:Article):boolean{
   	this.articles=this.articles.filter(a=>a!=article);
console.log(article);
article.question.answer=new Answer(""+ans.value,1);

console.log(article);
this.articles.push(article);
	return false;
   }
  

  ngOnInit(): void {
   // this.articles=[];
  	
console.log(this.questions);
// this.questions.map(q=>this.articles.push(new Article(q)));
 
  }

}
