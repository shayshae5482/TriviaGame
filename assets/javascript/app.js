//display a time for 60 seconds

//show an alert that says "You have 60 seconds to answer these questions"


//Once they press start, timer begins


//keep track of their input



//set up a function that shows the right answers

function check(){

var question1 = document.trivia.q1.value;
var question2 = document.trivia.q2.value;
var correct = 0;

//if statements
if (question1 == "Auto insurance automatically covers your medical costs after an accident.") {
    correct++;
}

if (question2 == "Comprehensive covers your vehicle for accidents such as animal hits and hail damage.") {
    correct++;
}

//create the else/FALSE statements to track wrong answers





//make the button work once finished
    document.getElementById("after_submit").style.visibility = "visible";

    //show how many are  correct
    document.getElementById("number_correct").innerHTML = "You answered " + correct + " correct.";
}

//the end
        
        

