///Create a new input and button element on the page using JavaScript only.Set the text of button to “Clickme”.
let inp = document.createElement('input');
let btn = document.createElement('button');
let body = document.querySelector('body');
body.append(inp);
body.append(btn);
btn.innerText= "Click me";


//Add following attributes to the element :- Change placeholder value of input to “username”- Change the id of button to “btn”
btn.setAttribute("id","btn");
inp.setAttribute("placeholder","usernsme");


//Access the btn using the query Selector and button id.Change the button background color to blue and text color to white.
document.getElementById('#btn');
btn.classList.add("btnsty");


//Create an h1 element on the page and set its text to “DOMPractice” underlined.Change its color to purple.
let ele = document.createElement('h1');
ele.innerText="DOM Practice";
body.append(ele);
ele.classList.add("elesty");


//Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold. 
let para = document.createElement('p');
para.innerHTML="Apna College <b>Delta</b> Practice";
body.append(para);



