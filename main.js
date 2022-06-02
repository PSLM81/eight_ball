// if the user want's, they can input their user name between the quotation marks.


let userName = "Parsa";


userName ? console.log(`Hello ${userName}!`): console.log("Hello!");

// The value of the following quesiton should be what the uesr wants to ask from the eightball


let userQuestion = "";

console.log(userQuestion);

let randomeNumber = Math.floor(Math.random()* 8);



switch(randomeNumber){
    case(0):
        console.log("It is certain");
        break;
    case(1):
        console.log("It is decidedly so");
        break;
    case(2):
        console.log("reply hazy try again");
        break;
    case(3):
        console.log('Cannot predict now');
        break;
    case(4):
        console.log("Do not count on it");
        break;
    case(5):
        console.log("My sources say no");
        break;
    case(6):
        console.log("Outlook not so good");
        break;
    case(7):
        console.log("Signs point to yes");
        break;
}
