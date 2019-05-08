#include <stdio.h>
#include <stdlib.h>
/*
Written By Gareth Clauson For IoT Programming
Memory Game
*/
//************************************************/

int generate_stage()
{
    return (rand() % (9)) + 1;
}

int generate_pitch(int pitch_variation)
{
    return 1000 * (rand() % pitch_variation);
}
//processes the ir input and returns a number representing the player's answer.
int process_input()
{
    int answer = -1; //TODO this is gross but it works
    //loop until an answer is found
    while (answer == -1)
    {
        //TODO get data
        printf("Your answer:\n > ");
        scanf("%d", &answer);
    }
    return answer;
}

//tell the arduino to beep x times (controlled by stage variable)
void play_level(int stage, int wait_time, int length, int pitch_variation)
{
    //conversion to milliseconds
    int _wait_time = wait_time * 1000;
    int _length = length * 1000;
    for (int i = 0; i < stage; i++)
    {
        // tone(buzzer, generate_pitch(pitch_variation)); // Send 1KHz sound signal... UNCOMMENT
        // delay(_length);                                // ...for 1 sec
        // noTone(buzzer);                                // Stop sound...
        // delay(_wait_time);                             // ...for 1sec
        //tell the thing to beep (with wait_time between beeps, and length of beep)
        printf("beep ");
    }
    printf("\n");
}
//print the answer of the level to the display.
void show_answer(int stage)
{
    //TODO
    printf("answer is %d\n", stage);
}

//run through the level
void process_level(int current_stage, int wait_time, int length, int pitch_variation)
{
    int stage = 0;
    //TODO add a cap for the number of attempts at a stage.
    while (stage < 3)
    { //checks for three consecutive correct answers
        play_level(current_stage, wait_time, length, pitch_variation);
        int answer = process_input();
        show_answer(current_stage);
        if (answer == current_stage)
        {
            printf("Correct!\n");
            //show them the answer, and iterate the stage by one to progress them.
            stage += 1;
        }
        //else, show the player the answer, generate a new stage and get them to try again
        current_stage = generate_stage();
    }
}

void increase_difficulty(int scalar, int wait_time, int length, int pitch_variation)
{
    //TODO improve
    wait_time -= scalar * 0.1;
    length -= scalar * 0.1;
    pitch_variation *= 1.5;
    printf("level difficulty increased\n");
}

const int buzzer = 9; //buzzer to arduino pin 9 SETTING
int main()
{
    // pinMode(buzzer, OUTPUT); UNCOMMENT
    int wait_time = 0.5;     //time to wait between beeps, in seconds.
    int length = 0.4;        //length of time of beeps, in seconds.
    int pitch_variation = 0; //how much the beeps change in tone.
    //TODO add a scoring system.
    int current_stage = generate_stage();
    for (int i = 0; i < 5; i++)
    {
        process_level(current_stage, wait_time, length, pitch_variation);
        increase_difficulty(i, wait_time, length, pitch_variation);
    }
    return 0;
    scanf("Type anything to continue ");
}
