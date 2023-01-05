let promptOpen = false
let counter = 0
let counter2 = 0
let prompt = ""


document.addEventListener('keydown', function(event) {
        if (promptOpen){

        if (event.key === "Shift"){

        } else if (event.key === "Backspace"){
            prompt = prompt.slice(0, -1)
        } else {
            prompt = prompt.concat(event.key)
        }
    }


    if (event.key === '(') {
        counter++;
        if (counter === 3) {
            promptOpen = true
            promptStart()
            counter = 0;
        }
    } else {
        counter = 0;
    }

    if (event.key === ')') {
        counter2++;
        if (counter2 === 3) {
            promptOpen = false
            promptEnd()
            counter2 = 0;
        }
    } else {
        counter2 = 0;
    }



});

function promptStart() {
    

}

function promptEnd() {
    prompt = prompt.slice(0, -3)
    alert("Your Prompt is: " + prompt)
}



  