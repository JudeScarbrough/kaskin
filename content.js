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
    
    var newWindow = window.open("https://chat.openai.com/chat")

    newWindow.alert("agh1")

    newWindow.addEventListener('load', function () {

        newWindow.alert("agh2")

        
        


        


            setTimeout(function () {
                const element = newWindow.document.querySelectorAll("textarea")[0]

                element.value = "agh"


                // create a new event
                var event = new KeyboardEvent('keydown', {
                    'key': 'Enter'
                });

                // dispatch the event
                element.dispatchEvent(event);




            }, 2000);

        





    });






}


  
