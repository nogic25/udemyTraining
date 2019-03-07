//closure 
//An inner function has always access to the varuable and parameters
//of its outer function, event after the outer functionhas returned

/*function interviewQuestion(job){
    return function (name){
       if (job === 'designer'){
        console.log (name + ' can you please explain what UX design is ?')
       }
       else if ( job === 'teacher'){
         console.log ('What subject do you teach '+name+' ?')
       }
       else 
       console.log ('Hello '+name+ ' what do you do ?')
    }
}

interviewQuestion('developer')('Maria'); */

//use imidietly incvoked function experssion 

(function(){


// homework
//create a constructor
function Question( question, answer,correct){
 this.question=question;
 this.answer=answer;
 this.correct=correct;
}

//create prototype add function to the existing constructor
Question.prototype.displayQuestion = 
function()
{
  console.log(this.question);
for (var i=0;i<this.answer.length;i++){
     console.log(i +' : '+this.answer[i] )
}
}
Question.prototype.checkAnswer=
function(ans){
  if (ans ===this.correct){
    console.log('This is the correct answer !')
  }
  else 
  console.log ('Wrong answer.. Try again ;)')
}
//create a function using constructor
//new operator creates a new empty object.
var q1=new Question ('Is Java the best language in the world',['Yes','No'],0);
var q2=new Question ('What is the name of your teacher ?', ['Maria','Fred','Jhon'],2);
var q3= new Question('What does best describes coding?', ['Boring','Hard','Fun','Impossible'],2)

//need to pick a random question for user to select 

var question=[q1,q2,q3];

var n=Math.floor(Math.random()*question.length);
question[n].displayQuestion();

var answer=parseInt(prompt("Plese select the correct answer ?"))
question[n].checkAnswer(answer);


//write method into the Question prototype property

})()

