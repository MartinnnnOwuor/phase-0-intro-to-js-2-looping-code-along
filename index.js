// Code your solutions in this file

const names = ["Guadalupe", "Ollie", 'Aki'];
const string = ['surprise'];

function writeCards (names, string){

    let messages = [];
    for (let j = 0; j < names.length; j++){
        let message = `Thank you, ${names[j]}, for the wonderful ${string} gift!`;
        messages.push (message);
        debugger;
    } 
    return messages;
}


function countDown (interger){

    while (interger >=0){
        console.log(interger--)
    }
}