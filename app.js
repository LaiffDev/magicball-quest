let buttonAnswer = document.getElementById("answer");
let ballAnswerEl = document.getElementById("ballAnswer");


function prediction() {
   let userQuestion = prompt ("Ask me ANYTHING");
   let questionEl = document.getElementById("question");
   questionEl.textContent = userQuestion;

   console.log(userQuestion);
}



function answer() {      
   let randomNumber = Math.floor(Math.random() * 8);
   let eightBall = "";

      switch (randomNumber) {
            case 0:
               eightBall = " It is certain";
            break;
            case 1:
               eightBall = "It is decidedly so";
            break;
            case 2:
               eightBall = "Reply hazy try again";
            break;
            case 3:
               eightBall = "Cannot predict now";
            break;
            case 4:
               eightBall = "Do not count on it";
            break;
            case 5:
               eightBall = "My sources say no";
            break;
            case 6:
               eightBall = "Outlook not so good";
            break;
            case 7:
               eightBall = "Signs point to yes";
               break;
   }
   ballAnswerEl.textContent = "The magic ball says : " + eightBall;
   console.log(eightBall);
}
answer();



function reset() {
   ballAnswerEl.textContent = "The magic ball says : ";
   questionEl = document.getElementById("question");
   questionEl.textContent = "Click HERE to ask anything";
}
reset();








