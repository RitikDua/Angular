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
  article:Article
  constructor() {

  	this.article=(new Article(new Question("What is your name",new Answer("Ritik Dua",9))))
   	// console.log(this.article);
   }

  ngOnInit(): void {
  }

}
