


//*<------------ querySelectors ------------>*//
//*<--------------------------------------->*//

let allQuestions = document.querySelectorAll('#game-board .col');
let firstRowQuestions = document.querySelectorAll('#row1 .col');
let secondRowQuestions = document.querySelectorAll('#row2 .col');
let thirdRowQuestions = document.querySelectorAll('#row3 .col');
let fourthRowQuestions = document.querySelectorAll('#row4 .col');
let fifthRowQuestions = document.querySelectorAll('#row5 .col');

let question = document.querySelector('#question');
let userInput = document.querySelector('input');
let submit = document.querySelector('button')

let scoreSum = 0;
let questionColor = false;

userInput.value = "";

// read the local jeopardy json file with async await
// 1. Pull the promise then 2. parse the data 
let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');

    let data = await rawJeopardyData.json();
    console.log(data);

    let groupedData = _.groupBy(data, 'value');
    console.log(groupedData);
    console.log(groupedData.$200);


//*<------------ eventListeners for the questions ------------>*//
//*<--------------------------------------------------------->*//
  
//* First row
    for (let i = 0; i < firstRowQuestions.length; i++) {
      firstRowQuestions[i].addEventListener('click', function(){
      
        let random100 =  groupedData.$100[Math.round(Math.random() * groupedData.$100.length)];
        question.innerHTML = `${random100.question}`
        
        console.log(random100.question);
        console.log(random100.answer);
       
        
        //*<----- submit button code ----->*//
        submit.addEventListener('click', function(event){
          event.preventDefault();
            console.log(userInput.value);
            console.log(random100.answer.toLowerCase())

            if(userInput.value.toLowerCase() === random100.answer.toLowerCase()){
                  scoreSum += parseInt(random100.value.substr(1));
                  question.innerHTML = "Correct!"
                  scoreAmount.innerHTML = `$${scoreSum}`;
                  firstRowQuestions[i].style.backgroundColor = "gold"; 
                  firstRowQuestions[i].style.color = "blue"; 
                  firstRowQuestions[i].style.textDecoration = "line-through"; 
                  firstRowQuestions[i].style.textDecorationColor = "red"; 
                  userInput.value = "";
                }else {
                  question.innerHTML = "Incorrect. Try again."
                  }
                                  
        });  
             
      }) 
  };
      //* Second row 
    for (let i = 0; i < secondRowQuestions.length; i++) {
      secondRowQuestions[i].addEventListener('click', function(){
      
        let random200 = groupedData.$200[Math.round(Math.random() * groupedData.$200.length)];
        question.innerHTML = `${random200.question}`
        console.log(random200.question);
        console.log(random200.answer);

            //*<----- submit button code ----->*//
            submit.addEventListener('click', function(event){
              event.preventDefault();
                console.log(userInput.value);
                console.log(random200.answer.toLowerCase())

                if(userInput.value.toLowerCase() === random200.answer.toLowerCase()){
                      scoreSum += parseInt(random200.value.substr(1));
                      question.innerHTML = "Correct!"
                      scoreAmount.innerHTML = `$${scoreSum}`;
                      secondRowQuestions[i].style.backgroundColor = "gold"; 
                      secondRowQuestions[i].style.color = "blue"; 
                      secondRowQuestions[i].style.textDecoration = "line-through"; 
                      secondRowQuestions[i].style.textDecorationColor = "red"; 
                      userInput.value = "";
                    }else {
                      question.innerHTML = "Incorrect. Try again."
                    }     
            });  
      }) 
  };


      //* Third row 
    for (let i = 0; i < thirdRowQuestions.length; i++) {
      thirdRowQuestions[i].addEventListener('click', function(){
      
        let random400 = groupedData.$400[Math.round(Math.random() * groupedData.$400.length)];
        question.innerHTML = `${random400.question}`
        console.log(random400.question);
        console.log(random400.answer);

        //*<----- submit button code ----->*//
        submit.addEventListener('click', function(event){
          event.preventDefault();
            console.log(userInput.value);
            console.log(random400.answer.toLowerCase())

            if(userInput.value.toLowerCase() === random400.answer.toLowerCase()){
                  scoreSum += parseInt(random400.value.substr(1));
                  question.innerHTML = "Correct!"
                  scoreAmount.innerHTML = `$${scoreSum}`;
                  secondRowQuestions[i].style.backgroundColor = "gold"; 
                  secondRowQuestions[i].style.color = "blue"; 
                  secondRowQuestions[i].style.textDecoration = "line-through"; 
                  secondRowQuestions[i].style.textDecorationColor = "red"; 
                  userInput.value = "";
                }else {
                  question.innerHTML = "Incorrect. Try again."
                }     
        });  
      }) 
  };
      //* Fourth row 
    for (let i = 0; i < fourthRowQuestions.length; i++) {
      fourthRowQuestions[i].addEventListener('click', function(){
      
        let random600 = groupedData.$600[Math.round(Math.random() * groupedData.$600.length)];
        question.innerHTML = `${random600.question}`
        console.log(random600.question);
        console.log(random600.answer);

              //*<----- submit button code ----->*//
            submit.addEventListener('click', function(event){
              event.preventDefault();
                console.log(userInput.value);
                console.log(random600.answer.toLowerCase())

                if(userInput.value.toLowerCase() === random600.answer.toLowerCase()){
                      scoreSum += parseInt(random600.value.substr(1));
                      question.innerHTML = "Correct!"
                      scoreAmount.innerHTML = `$${scoreSum}`;
                      secondRowQuestions[i].style.backgroundColor = "gold"; 
                      secondRowQuestions[i].style.color = "blue"; 
                      secondRowQuestions[i].style.textDecoration = "line-through"; 
                      secondRowQuestions[i].style.textDecorationColor = "red"; 
                      userInput.value = "";
                    }else {
                      question.innerHTML = "Incorrect. Try again."
                    }     
            });  
      }) 
  }; 
      // Fourth row 
    for (let i = 0; i < fifthRowQuestions.length; i++) {
      fifthRowQuestions[i].addEventListener('click', function(){
      
        let random800 = groupedData.$800[Math.round(Math.random() * groupedData.$800.length)];
        question.innerHTML = `${random800.question}`
        console.log(random800.question);
        console.log(random800.answer);

        //*<----- submit button code ----->*//
        submit.addEventListener('click', function(event){
          event.preventDefault();
            console.log(userInput.value);
            console.log(random800.answer.toLowerCase())

            if(userInput.value.toLowerCase() === random800.answer.toLowerCase()){
                  scoreSum += parseInt(random800.value.substr(1));
                  question.innerHTML = "Correct!"
                  scoreAmount.innerHTML = `$${scoreSum}`;
                  secondRowQuestions[i].style.backgroundColor = "gold"; 
                  secondRowQuestions[i].style.color = "blue"; 
                  secondRowQuestions[i].style.textDecoration = "line-through"; 
                  secondRowQuestions[i].style.textDecorationColor = "red"; 
                  userInput.value = "";
                }else {
                  question.innerHTML = "Incorrect. Try again."
                }     
        });  
      }) 
  };

};
readJeopardyData();


















//*<------------ submit button------------>*//
// submit.addEventListener('click', function(event){
//   event.preventDefault();
//   console.log("The submit button is working")
//   console.log("The user's answer is:" +  userInput)

//         if(userInput.value.toLowerCase() === random100.answer.toLowerCase()){
//           scoreAmount += parseInt(firstRowQuestions[i].value.substr(1));
//           question.innerHTML = "Correct!"
//           scoreAmount.innerHTML = `${scoreAmount + random100.value}`;
//         }else{
//               question.innerHTML = "Incorrect. Try again."
//         }

//   userInput.value = "";
//   question.innerHTML = "The question will appear here:";
// });


// `${scoreAmount + random100.value}`;

