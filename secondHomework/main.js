//closure 
//An inner function has always access to the varuable and parameters
//of its outer function, event after the outer functionhas returned

function interviewQuestion(job){
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
interviewQuestion('developer')('Maria');