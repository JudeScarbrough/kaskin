var newWindow = window.open('https://chat.openai.com/chat')

newWindow.addEventListener('load', function() {
    setTimeout(function() {
        const element = document.querySelectorAll("textarea")[0]
    
        element.value = "penis"

        
        // create a new event
        var event = new KeyboardEvent('keydown', {
            'key': 'Enter'
        });
  
        // dispatch the event
        element.dispatchEvent(event);
            
        


    }, 500);
      
  
    
});

