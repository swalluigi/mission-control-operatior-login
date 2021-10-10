function playCraps() { //Starts the "playCraps" function
    console.log("playCraps() function Started");//writes "playCraps() function Started" in the console log
    var die1 = Math.ceil(Math.random()* 6); //creates variable Die1 with a random number from 0(inclusive) to 6 (exclusive)
                                            //math.ceil rounds decimals to the nearest whole number

    var die2 = Math.ceil(Math.random() * 6); //creates variable die2 with a random number from 0(inclusive) to 6 (exclusive) V
                                            //math.ceil rounds decimals to the nearest whole number


    var sum = die1 + die2; //adds die1 and die2 together
    document.getElementById("die1res").innerHTML= "Die 1 = " + die1; //displays the results of Die 1 on the webpage at the part assigned the ID of "die1res"
    document.getElementById("die2res").innerHTML="Die 2 = " + die2; //displays the results of Die 2 on the webpage at the part assigned the ID of "die2res"
    document.getElementById('sumres').innerHTML="Sum = " + sum; //displays the sum of die 1 and die 2 on the webpage at the part assigned the ID of "sumres"

    if (sum == 7 || sum == 11) { //checks if the value of the sum variable is either 7 or 11
        document.getElementById("finalres").innerHTML="CRAPS - you lose!";//displays "CRAPS-you lose!" on the webpage at the part assigned the ID of "finalres"
        loss = loss + 1; // increases the number of losses by 1
        document.getElementById("lossres").innerHTML= loss; // displays the cnumber of losses on the webpage at the part assigned the ID of "lossres"
    }
    else if (die1 == die2 && die1 % 2 == 0) { //if the previous if statement is false, the code checks if the values for both die variables are the same AND if die1 is an even number
        document.getElementById("finalres").innerHTML="DOUBLES - you win"; //displays "DOUBLES-you win" on the webpage at the part assigned the ID of "finalres"
        wins++;//increases the number of wins by 1
        document.getElementById("winres").innerHTML= wins;//displays the current number of wins on the webpage at the part assigned the ID of "winres"
        
    } else { //if both of the previous if statements are false, this code runs
        document.getElementById("finalres").innerHTML="Draw-No one wins. Please try again"; //displays "Draw-No one wins. Please try again" on the webpage the part assigned the id of "finalres"
        ties++;//increases the number of ties 
        document.getElementById("tieres").innerHTML= ties;//displays the number of ties on the webpage at the part assigned the ID of "tieres"
    }

}

function blastOff(){
    var img = document.createElement("img");
    img.src = "Sequence-_1.gif";
    var currtime = 50;
    var sec = 0;
    
        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
            setTimeout(function()
                {alert ("Blastoff!");}, 1); //this time out function is used to make sure the timer VISUALLY displays zero when the blast off alert pops up. normally, it pops up just before 5 switches to 0
            document.body.appendChild(img);
            
            
        }, sec);

        


    
}

function btrBlastOff(){
    console.log("btrBlastOff() started");
    var img = document.createElement("img");
    img.src = "Sequence-_1.gif";
    var currtime = 50;
    for(var i = 0; i < 11; i++){25
        setTimeout(function(){
          if(currtime>=25){
              //if conditions are met
              document.getElementById("countdownTimer").innerHTML=currtime;  
          } else if(currtime==0){
            document.getElementById("countdownTimer").innerHTML="Blastoff!";
            document.body.appendChild(img); 
          }
          //if else if conditions are true
          else{
              //if conditions are not met
              document.getElementById("countdownTimer").innerHTML="Warning less than 1/2 to launch, time left = "+currtime;  
          }
         
          currtime=currtime-5
        },i*5000);
        
    }
   
}
