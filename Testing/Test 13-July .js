/*
///////////////////////////////////////////////////finding html elements in JavaScript

ChatGPT
In JavaScript, you can find HTML elements using various methods provided by the Document Object Model (DOM). Here are some common techniques:

1/getElementById: Use this method when you have the id attribute of the element you want to find.

*/
const element1 = document.getElementById('elementId');

/*
getElementsByClassName: Use this method when you want to find elements based on their class names. It returns a collection of elements because multiple elements can have the same class.
*/
const elements2 = document.getElementsByClassName('className');

/*
getElementsByTagName: Use this method when you want to find elements based on their tag name (e.g., <div>, <p>, <a>, etc.). It also returns a collection of elements.
*/
const elements3 = document.getElementsByTagName('tagName');
/*

querySelector: Use this method when you want to find elements using CSS selectors. It returns the first matching element.
*/
const element4 = document.querySelector('selector');
/*

querySelectorAll: Use this method when you want to find multiple elements using CSS selectors. It returns a collection of matching elements.
*/
const elements5 = document.querySelectorAll('selector');
/*
These methods return the elements found in the HTML document, allowing you to manipulate or interact with them using JavaScript.
*/


///////////////////////////////////////////////////changing html elements in JavaScript/////////////////////////////////////////////////////

/*

In JavaScript, you can change HTML elements by manipulating their properties, attributes, or content. Here are some common ways to modify HTML elements:

Changing Element Content:
innerHTML: Modifies the HTML content inside an element.

*/
const element = document.getElementById('elementId');
element.innerHTML = 'New content';

/*
innerText or textContent: Sets the text content of an element, excluding any HTML tags.

*/
const element = document.getElementById('elementId');
element.innerText = 'New text content';
/*
Modifying Element Attributes:

setAttribute: Sets the value of the specified attribute on an element.
javascript
*/
const element = document.getElementById('elementId');
element.setAttribute('attributeName', 'attributeValue');

/*
getAttribute: Retrieves the value of the specified attribute from an element.

*/
const element = document.getElementById('elementId');
const attributeValue = element.getAttribute('attributeName');

/*



Changing Element Styles:

style.property: Allows you to change individual CSS properties of an element.

*/
const element = document.getElementById('elementId');
element.style.color = 'red';
element.style.fontSize = '20px';
/*
Modifying Element Classes:
classList.add: Adds a CSS class to an element.

*/
const element = document.getElementById('elementId');
element.classList.add('className');

/*
classList.remove: Removes a CSS class from an element.

*/
const element = document.getElementById('elementId');
element.classList.remove('className');

/*
classList.toggle: Toggles the presence of a CSS class on an element.

*/
const element = document.getElementById('elementId');
element.classList.toggle('className');


///////////////////////////////////adding and deleting elements in JavaScript/////////////////////////////////


/*
In JavaScript, you can dynamically add and delete HTML elements using various methods provided by the Document Object Model (DOM).
Here are some common techniques:
Adding Elements:

createElement: Use this method to create a new HTML element.
*/

const newElement = document.createElement('tagName');

/*
appendChild: Use this method to add a newly created element as a child of another element.

*/

const parentElement = document.getElementById('parentElementId');
parentElement.appendChild(newElement);
/*
insertBefore: Use this method to insert a new element before an existing element.

*/
const existingElement = document.getElementById('existingElementId');
const parentElement = existingElement.parentNode;
parentElement.insertBefore(newElement, existingElement);

/*
Deleting Elements:

removeChild: Use this method to remove a child element from its parent.
*/
const parentElement = document.getElementById('parentElementId');
const childElement = document.getElementById('childElementId');
parentElement.removeChild(childElement);

/*
remove: Use this method to remove an element directly.

*/
const elementToRemove = document.getElementById('elementId');
elementToRemove.remove();
/*
/////////////////////////////////////////////////////////adding events handlers in JavaScript////////////////////////

In JavaScript, you can add event handlers to HTML elements to respond to user actions or other events. Event handlers allow you to define functions that will be executed when a specific event occurs on an element. Here are some common ways to add event handlers:
Inline Event Handlers: You can add event handlers directly to HTML elements using inline event attributes.

*/

<button onclick="myFunction()">Click Me</button>


/*
DOM Event Handlers: You can add event handlers using the properties of the DOM elements.

*/const element = document.getElementById('elementId');
element.onclick = function () {
    // Event handling code
};
/*
addEventListener: This method allows you to attach event handlers to elements and provides more flexibility, as you can attach multiple event handlers to the same element.

*/
const element = document.getElementById('elementId');
element.addEventListener('click', function () {
    // Event handling code
});

/*
The addEventListener method also supports other types of events such as 'mouseover', 'keydown', 'submit', etc.

When defining event handlers, you can either use anonymous functions or reference named functions:

*/

// Anonymous function
element.addEventListener('click', function () {
    // Event handling code
});

// Named function
function handleClick() {
    // Event handling code
}

element.addEventListener('click', handleClick);


