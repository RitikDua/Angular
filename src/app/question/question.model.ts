import {Answer} from "../answer/answer.model";
export class Question{
	question:string;
	answer:Answer;
	isAns:boolean;

	constructor(question:string,...args)
	{
		this.question=question;
		
		if(args.length==0){
			this.answer=undefined;
		}
		else{
			this.answer=args[0];
		}
	}
	isAnswered(){
		return !(this.answer==undefined||this.answer.post.length==0);
	}

}