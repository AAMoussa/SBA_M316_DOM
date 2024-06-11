Skills Based Assessment (SBA 316)
The Document Object Model
================================
In this Assignment, I've created a small single-page web application.
and since that the topic and content of this application is entirely 
up to me, I decided to create a user prompted page to collect their 
Information through a form that upon completion and submitting, 
the data collected is displayed at the bottom of the page as an
unordered list of items.

The logic here was to use JavaScript to dinamically comunicate with the 
HTML document through the use of the DOM, BOM, event object's methods, 
and form validation.

The code logic and algorithm flow:
---------------------------------
First, I created the basic HTML document with all the required elements
to be communicated with the JavaScript code. in the JS code, I started by
selecting the form element, selecting and caching all the user's inputs from
each input field to a variable, then defined an array to hold on to these inputs
so that I can utilize it later in the way that it is intented to be.
In this page, it will just print to the bottom of the screen to memic
a user's created profile.
For the section that is intended to be used to display the profile's list
items, first I selected it then created an unordered list, setting an attribute value
and a class named change color that can be used to reference it from the CSS
styling sheet. finally appended it to the parent element.

for each of the elements in the form, I've created a function to validate the
user's input. Each of these functions then is encorporated in the bigger validation
function that is then passed to the the submit event method of the form, as
an argument for the event handler. This event listener will perform the necessary validation 
for the input and its formatting, in addition the Browser object model was utilized here
by using its methods such as the alert method upon successful or failed submission.

Finally, if the inputted information passed all the validation, list items are,
created to hold each input value, then append it to the parent UL of it, so
that at the end we have an unordered list of input user's information.
=============================================================================================.
