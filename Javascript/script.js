
var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
    {
		username: "andrei2",
		password: "supersecret2"
	}
];


var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What is your username?")
var passwordPrompt = prompt("What is your password?")


function isValid(user, pass){
    for(var i = 0; i < database.length; i++){
        if (user === database[i].username && pass === database[i].password) 
            return true
    }
    return false
}

function signIn(user, pass) {
    if (isValid(user,pass)){
        console.log(newsfeed)
    }else{
        alert("Wrong username and Password")
    }
}

signIn(userNamePrompt,passwordPrompt)