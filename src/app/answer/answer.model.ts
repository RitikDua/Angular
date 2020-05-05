export class Answer{
	post:string;
	votes:number;
	constructor(post:string,votes:number){
		this.post=post;
		this.votes=votes||0;
	}
	voteUp():void{
		this.votes++;
	}
	voteDown():void{
		this.votes--;
	}

}