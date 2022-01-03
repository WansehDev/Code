// caching selectors to a variable
var btn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


// returns the length of userinput
function inputLength() {
	return input.value.length;
}

// function addDeleteBtn(){
// 	var list = document.getElementById('Todolist')
// 	console.log()
// 	var getBtnList = function(lius)

// }


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	input.value = "";

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Remove"));
	button.setAttribute("class", "remove-btn")
	li.appendChild(button);

	button.onclick = removeListElement
	
}

function removeListElement(event) { event.target.parentNode.remove(); }

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.key === 'Enter') {
		createListElement();
	}
}

function toggleTextNode(event) { event.target.classList.toggle("done") }

btn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
ul.addEventListener('click', toggleTextNode)
