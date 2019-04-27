// You will develop a game that generates random numbers between 1 to 10 and play it using beeps created by a buzzer. Next, the player should enter the number of beeps using the IR remotes after listening to them. If the player has three sequential correct answer they will progress to the next level. As the levels increase, the tones are shorter and there is less time in between them. You have flexibility to implement the difficulty of the game using the tones however you wish. You should show the correct answer using 8 segments supplied in the kit.

// You will also need to develop a simple web page to keep track of the players and their level. Each player may be assigned a unique number to be asked for before starting the game. You may use LEDs to show the status of the board such as when the user should enter the user code, when it is progressing to the next level, the Arduino is busy retrieving the level information etc. 

//code
//************************************************/



function generate_stage() {
    return Math.floor(Math.random() * 10);
}

//processes the ir input and returns a number representing the player's answer.
function process_input() {
    //TODO
    var answer = "";
    var i = 0;
    //loop until an answer is found
    while (answer == "") {
        //get data

    }
    return answer;
}

//tell the arduino to beep x times (controlled by stage variable)
function play_level(stage, wait_time, length) {

    for (i = 0; i <= stage; i++) {
        //tell the thing to beep (with wait_time between beeps, and length of beep)
    }
}
//print the answer of the level to the display.
function show_answer(stage) {
    //todo
}

function process_level(current_stage) {
    var stage = 0;
    //todo add a cap for the number of attempts at a stage.
    while (stage < 3) { //checks for three consecutive correct answers
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

function main() {
    //todo add a scoring system.
    var wait_time = 0.5; //time to wait between beeps, in seconds.
    var length = 0.4; //length of time of beeps, in seconds.
    for (i = 0; i < 5; i++) {
        process_level(answer, current_stage);
        increase_difficulty(i);
    }
}

//run
main();