import random
import math
# Written By Gareth Clauson For IoT Programming
# Memory Game

# ************************************************/


def generate_stage():
    return math.floor(random.randint(1,10))


def generate_pitch(pitch_variation):
    return 1000 + math.floor(100*(random.randint(0,pitch_variation)))

# processes the ir input and returns a number representing the player's answer.


def process_input():
    answer = -1
    # todo this is gross but it works
    # loop until an answer is found
    while (answer == -1):
        # todo get data
        answer = input("Your answer\n>")
    return answer

# tell the arduino to beep x times(controlled by stage variable)


def play_level(stage, wait_time, length, pitch_variation):
    # conversion to milliseconds
    _wait_time = wait_time * 1000
    _length = length * 1000
    for i in range(0,stage):
        # tone(buzzer, generate_pitch(pitch_variation))
        # Send 1KHz sound signal... UNCOMMENT
        # delay(_length)
        # ...for 1 sec
        # noTone(buzzer)
        # Stop sound...
        # delay(_wait_time)
        # ...for 1sec
        # tell the thing to beep(with wait_time between beeps, and length of beep)
        print("beep")

# print the answer of the level to the display.


def show_answer(stage):
    # todo
    print("answer is ",stage)

# run through the level


def process_level(current_stage, wait_time, length, pitch_variation):
    stage = 0
    # TODO add a cap for the number of attempts at a stage.
    while (stage < 3):
        # checks for three consecutive correct answers
        play_level(current_stage, wait_time, length, pitch_variation)
        answer = process_input()
        show_answer(current_stage)
        if (answer == current_stage):
            print("Correct!\n")
            # show them the answer, and iterate the stage by one to progress them.
            stage += 1
        # else, show the player the answer, generate a new stage and get them to try again
        current_stage = generate_stage()


def increase_difficulty(scalar, wait_time, length, pitch_variation):
    # TODO improve
    wait_time -= scalar * 0.1
    length -= scalar * 0.1
    pitch_variation *= 1.5
    print("level difficulty increased\n")


# buzzer to arduino pin 9 SETTING
def main():
    buzzer = 9
    # pinMode(buzzer, OUTPUT)
    # UNCOMMENT
    wait_time = 0.5
    # time to wait between beeps, in seconds.
    length = 0.4
    # length of time of beeps, in seconds.
    pitch_variation = 0
    # how much the beeps change in tone.
    # TODO add a scoring system.
    current_stage = generate_stage()
    for i in range(0,4):
        process_level(current_stage, wait_time, length, pitch_variation)
        increase_difficulty(i, wait_time, length, pitch_variation)
    print("Type anything to continue ")
    return 0

main()