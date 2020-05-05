import {Answer} from "../answer/answer.model";
export class Question{
	question:string;
	answer:Answer;
	isAns:boolean;

	constructor(question:string,answer:Answer)
	{
		this.question=question;
		this.answer=answer;
		// console.log(answer);
		if(answer==undefined){//||answer.post.length==0){
			this.isAns=!true;
		}
		else{
			this.isAns=true;
			this.answer=this.answer;
		}
	}
	isAnswered(){
		return this.isAns;
	}

}