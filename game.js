/*
Written By Gareth Clauson For IoT Programming
Memory Game
*/
//************************************************/



function generate_stage() {
    return Math.floor(Math.random() * 8) + 2;
}

//processes the ir input and returns a number representing the player's answer.
function process_input() {
    var answer = "";
    var i = 0;
    //loop until an answer is found
    while (answer == "") {
        //TODO get data
        answer = prompt("what is your answer");
    }
    return answer;
}

//tell the arduino to beep x times (controlled by stage variable)
function play_level(stage, wait_time, length) {

    for (i = 0; i < stage; i++) {
        //tell the thing to beep (with wait_time between beeps, and length of beep)
        alert("beep");
    }
}
//print the answer of the level to the display.
function show_answer(stage) {
    //todo
    alert(stage);
}

function process_level(current_stage) {
    var stage = 0;
    //todo add a cap for the number of attempts at a stage.
    while (stage < 3) { //checks for three consecutive correct answers
        alert("stage is " + stage);
        play_level(current_stage, wait_time, length);
        var answer = process_input();
        show_answer(current_stage);
        if (answer == current_stage) {
            //show them the answer, and iterate the stage by one to progress them.
            stage += 1;
        } else {
            //show the player the answer, generate a new stage and get them to try again
        }
        current_stage = generate_stage();
    }
}

function increase_difficulty(scalar) {
    //TODO improve
    wait_time -= scalar * 0.1;
    length -= scalar * 0.1;
}

var wait_time = 0.5; //time to wait between beeps, in seconds.
var length = 0.4; //length of time of beeps, in seconds.
function main() {
    //todo add a scoring system.
    var current_stage = generate_stage();
    for (i = 0; i < 5; i++) {
        process_level(current_stage);
        increase_difficulty(i);
    }
}

//run
main();