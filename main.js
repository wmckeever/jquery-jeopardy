
// read the local jeopardy json file with async await
// 1. Pull the promise then 2. parse the data 
let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');

    let data = await rawJeopardyData.json();
    console.log(data);

    let groupedData = _.groupBy(data, 'value');
    console.log(groupedData);
    console.log(groupedData.$200);
}
readJeopardyData();


//*<------------ querySelectors ------------>*//
//*<--------------------------------------->*//

let firstRowQuestions = document.querySelectorAll('#row .col');
firstRowQuestions.innerHTML= "$100";