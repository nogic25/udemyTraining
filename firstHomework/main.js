/*
Calculate BMI
*/
var weightMark = 85;
var weightJohn = 90;
var heightMark = 180;
var heightJohn= 180;

bmiMark= weightMark/(heightMark*heightMark);
bmiJohn= weightJohn/(heightJohn*heightJohn);

//var bmi = bmiMark < bmiJohn;

//console.log('Is Mark\'s BMI higher than John\'s BMI ?'+ bmi);
if ( bmiMark>bmiJohn){
  console.log('Mark\'s BMI higher than John\'s BMI ');
}
else {
  console.log('John\'s BMI higher than Mark\'s BMI ');
}

////////////////////////////////////////////



var averageMarkGame=(89+120+103)/3
var averageJohnGame=(89+134+100)/3
var averageMaryGame=(97+134+105)/3

if ( averageMarkGame>averageJohnGame && averageMarkGame>averageMaryGame ){
  console.log('Mark wins');
}
else if (averageJohnGame>averageMarkGame && averageJohnGame>averageMaryGame ){
  console.log('John wins');
}
else if (averageMaryGame>averageMarkGame && averageMaryGame>averageJohnGame ){
    console.log('Mary wins');
}
else {
  console.log('Tie')
}


/////

 function tipCalculator(bill){
     var percentage
  if(bill <50){
    percentage=0.2
  }
  else if  ( bill >=50 && bill <200){
      percentage=0.15
  }
  else {
      percentage=0.1
  }
  return percentage * bill;
}
var bills=[124,48,268];
var tips=[tipCalculator(bills[0]),
          tipCalculator(bills[1]),
          tipCalculator(bills[2])];

var finalBill=[bills[0]+tips[0],
               bills[1]+tips[1],
               bills[2]+tips[2]];
console.log(tips,finalBill);
console.log (tipCalculator(300));


///////////////////////////////////////////////////////////

var mark ={
  fullName: 'Mark Persinm',
  mass: 100,
  height: 180,
  calcBMI: function(){
  this.bmi= this.mass/(this.height*this.height);
  return this.bmi;
  }
};

var john ={
  fullName: 'John Liner ',
  mass: 110,
  height: 180,
  calcBMI: function(){
  this.bmi= this.mass/(this.height*this.height);
  return this.bmi;
  }
};

john.calcBMI();
mark.calcBMI();
console.log(john,mark);

//console.log('Is Mark\'s BMI higher than John\'s BMI ?'+ bmi);
if ( mark.calcBMI()>john.calcBMI()){
  console.log(mark.fullName + ' BMI higher than John\'s BMI ');
}
else if (mark.bmi<john.bmi ){
  console.log(john.fullName+ ' BMI higher than Mark\'s BMI ');
}
else {
  console.log('Equal BMI ')
}

////////////////////////////////////////
//Tip calculator advance:
var john={
  fullName:'John Smith',
  bill: [124,48,268,180,42],
  calcTip: function(){
    this.tips=[];
    this.finalValues=[];
    for ( i=0; i<this.bill.length; i++){
      //determine percantage based on tipping rules
    var percentage;
    var bill=this.bill[i];
 if(bill<50){
   percentage=0.2
 }
 else if  ( bill >=50 && bill <200){
     percentage=0.15
 }
 else {
     percentage=0.1
 }
 //Add results to the correspanding array
 this.tips[i]=bill*percentage;
 this.finalValues[i]=bill + (bill*percentage);
}
   }
      }



//Additional chalange:
var mark={
  fullName:'Mark Louiser',
  bill: [55,500,110,45],
  calcTip: function(){
    this.tips=[];
    this.finalValues=[];
    for ( i=0; i<this.bill.length; i++){
      //determine percantage based on tipping rules
    var percentage;
    var bill=this.bill[i];
 if(bill<100){
   percentage=0.2
 }
 else if  ( bill >=100 && bill <300){
     percentage=0.1
 }
 else {
     percentage=0.25
 }
 this.tips[i]=bill*percentage;
 this.finalValues[i]=bill + (bill*percentage);
}
   }
      }

function calculateAverageTip (tip){
  var sum=0;
  for (i=0;i<tip.length; i++){
    sum=sum+tip[i];
  }
  return sum/tips.length;
}


//Do the calculations
john.calcTip();
mark.calcTip();
console.log(john,mark);

john.average=calculateAverageTip(john.tips);
mark.average=calculateAverageTip(mark.tips);
console.log(john,mark);

if (john.average > mark.average){
  console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);

}else {
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}

