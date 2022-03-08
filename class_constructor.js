class Student{
	constructor(marks){	
	this.arr_mark = marks;
	this.total_subject = marks.length;
	let sum = 0;
	for(let i=0;i<marks.length;i++){
		sum+=marks[i];
	}
	this.total_mark = sum;
	console.log("Total marks: ",sum);
	}
	average(){
	let average = this.total_mark/this.total_subject;
	this.average = average;
	console.log("Average: ",average,"%");
	}
	grade(){
	if(this.average < 35){
	console.log("Grade D");

	}else if(this.average > 35 && this.average < 50){
	console.log("Grade c");
	}else if(this.average > 50 && this.average < 70){
	console.log("Grade B");
	}else if(this.average > 70 && this.average < 85){
	console.log("Grade A");
	}else{
	console.log("Grade A+");
    }   
}
}
let marks = [80,8,80,8,80];
const o = new Student(marks);
o.average();
o.grade();