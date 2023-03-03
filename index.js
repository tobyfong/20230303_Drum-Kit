// Detecting Button Press
const drumButtons = document.querySelectorAll(".drum")

for (let i = 0; i < drumButtons.length; i++) {

    drumButtons[i].addEventListener("click", function() {

        const buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

};

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

    playSound(event.key);
    buttonAnimation(event.key);

});

function playSound(key) {
    switch (key) {
        case 'w':
            const tom1Audio = new Audio('sounds/tom-1.mp3');
            tom1Audio.play();
            break;

        case 'a':
            const tom2Audio = new Audio('sounds/tom-2.mp3');
            tom2Audio.play();
            break;

        case 's':
            const tom3Audio = new Audio('sounds/tom-3.mp3');
            tom3Audio.play();
            break;

        case 'd':
            const tom4Audio = new Audio('sounds/tom-4.mp3');
            tom4Audio.play();
            break;

        case 'j':
            const crashAudio = new Audio('sounds/crash.mp3');
            crashAudio.play();
            break;

        case 'k':
            const kickBassAudio = new Audio('sounds/kick-bass.mp3');
            kickBassAudio.play();
            break;

        case 'l':
            const snareAudio = new Audio('sounds/snare.mp3');
            snareAudio.play();
            break;

        default:
            console.log(character);
    }
}

function buttonAnimation(currentKey) {

    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}