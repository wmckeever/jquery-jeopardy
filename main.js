


//*<------------ querySelectors ------------>*//
//*<--------------------------------------->*//

let firstRowQuestions = document.querySelectorAll('#row1 .col');
let secondRowQuestions = document.querySelectorAll('#row2 .col');
let thirdRowQuestions = document.querySelectorAll('#row3 .col');
let fourthRowQuestions = document.querySelectorAll('#row4 .col');
let fifthRowQuestions = document.querySelectorAll('#row5 .col');

// let question101 = document.querySelector('.q-101');
// let question102 = document.querySelector('.q-102');
// let question103 = document.querySelector('.q-103');
// let question104 = document.querySelector('.q-104');
// let question105 = document.querySelector('.q-105');


let question = document.querySelector('#question');
let userInput = document.querySelector('.form-control');
let submit = document.querySelector('.btn')

let scoreTotal = 0;


// read the local jeopardy json file with async await
// 1. Pull the promise then 2. parse the data 
let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');

    let data = await rawJeopardyData.json();
    console.log(data);

    let groupedData = _.groupBy(data, 'value');
    console.log(groupedData);
    console.log(groupedData.$200);

    // First row
    for (let i = 0; i < firstRowQuestions.length; i++) {
      firstRowQuestions[i].addEventListener('click', function(){
      
        let random100 = groupedData.$100[Math.round(Math.random() * groupedData.$100.length)];
        question.innerHTML = `${random100.question}`
        console.log(random100.question);
      }) 
  };
      // Second row 
    for (let i = 0; i < secondRowQuestions.length; i++) {
      secondRowQuestions[i].addEventListener('click', function(){
      
        let random200 = groupedData.$200[Math.round(Math.random() * groupedData.$200.length)];
        question.innerHTML = `${random200.question}`
        console.log(random200.question);
      }) 
  };
      // Third row 
    for (let i = 0; i < thirdRowQuestions.length; i++) {
      thirdRowQuestions[i].addEventListener('click', function(){
      
        let random400 = groupedData.$400[Math.round(Math.random() * groupedData.$400.length)];
        question.innerHTML = `${random400.question}`
        console.log(random400.question);
      }) 
  };
      // Fourth row 
    for (let i = 0; i < fourthRowQuestions.length; i++) {
      fourthRowQuestions[i].addEventListener('click', function(){
      
        let random600 = groupedData.$600[Math.round(Math.random() * groupedData.$600.length)];
        question.innerHTML = `${random600.question}`
        console.log(random600.question);
      }) 
  };
      // Fourth row 
    for (let i = 0; i < fifthRowQuestions.length; i++) {
      fifthRowQuestions[i].addEventListener('click', function(){
      
        let random800 = groupedData.$800[Math.round(Math.random() * groupedData.$800.length)];
        question.innerHTML = `${random800.question}`
        console.log(random800.question);
      }) 
  };

















};
  readJeopardyData();
  
  
  
  //*<------------ functions ------------>*//
  //*<--------------------------------------->*//

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //*<------------ eventListeners ------------>*//
  //*<--------------------------------------->*//
 
      
  





//*<------------ submit button------------>*//
submit.addEventListener('click', function(){
  console.log("The submit button is working")
});