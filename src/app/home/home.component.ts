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
  articles:Article[]

  constructor() { }

  ngOnInit(): void {
  // console.log(data);
  this.articles=[];
  	
console.log(this.questions);
this.questions.map(q=>this.articles.push(new Article(q)));
  
  }

   getArticles():Article[]{
   	// console.log(this.articles.filter(w=>w.question.isAnswered()));
   	return this.articles.filter(x=>x.question.isAnswered());//filter(w=>w.question.isAnswered());
   }
  


}
