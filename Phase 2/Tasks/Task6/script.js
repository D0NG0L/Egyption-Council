 // TASK
           // try the same secanrios of dom 
           // deal with html collection of divs  5
           //  loop and set background color for each div 

           // deal with images set collection of images 
           //  change the style of image to bo circular 

           // deal with inputs 
            // try to implement this event
            // when write any charchater  show the charcher in console 
             //  counter each charchter written 

             // implement hover using js 

             // prevent user to enter right click in any place in document 


             // try all examples in session  

             // try to apply readystatechange  JsonPlaceHolder

var divs = document.getElementsByClassName('box');

var divArray = Array.from(divs);

divArray.forEach(function(div, index) {
    div.style.backgroundColor = `hsl(${index * 50}, 70%, 50%)`;
});

// ======================================================

let images = document.getElementsByClassName('circle-image');
        Array.from(images).forEach(function(image) {
            image.style.borderRadius = '50%';
            image.style.border = '2px solid #000'; // Optional border
        });
// Task 3: Handle input event to show character in console and count characters
let textInput = document.getElementById('textInput');
let charCountDisplay = document.getElementById('charCount');
let charCount = 0;

textInput.addEventListener('input', function(event) {
    let charactersTyped = event.data;
    if (charactersTyped !== null) {
        charCount += charactersTyped.length;
    } else {
        charCount = textInput.value.length;
    }
    console.log(`Characters Typed: ${charactersTyped}`);
    charCountDisplay.textContent = charCount;
});

// Task 4: Implement hover effect using JavaScript
let hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', function() {
    hoverBox.style.backgroundColor = 'lightgreen';
});
hoverBox.addEventListener('mouseleave', function() {
    hoverBox.style.backgroundColor = 'lightblue';
});

// Task 5: Prevent right-click in any place in the document
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    console.log('Right-click is disabled on this page.');
});

// Task 6: Apply readystatechange with JSONPlaceholder
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            console.log('Response:', response);
        } else {
            console.error('Error fetching data:', xhr.status, xhr.statusText);
        }
    }
};
xhr.send();