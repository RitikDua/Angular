import {Answer} from "../answer/answer.model";
export class Question{
	question:string;
	answer:Answer;

	constructor(question:string,answer:Answer)
	{
		this.question=question;
		this.answer=answer;
	}

}