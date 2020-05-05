import {Question} from '../question/question.model';

export class Article{
	question:Question;
	constructor(question:Question)
	{
		this.question=question;
	}
}