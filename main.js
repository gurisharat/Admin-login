// button listener
document.getElementById("btn").addEventListener("click", btnClicked);

// button function
function btnClicked() { 
let username = document.getElementById("user-in").value;
let password = document.getElementById("pass-in").value;
if(username === "admin" & password === "1234") {
document.getElementById("output").innerHTML = '<p>login sucessful.</p>'
} else if (username != "admin") { 
document.getElementById("output").innerHTML = '<p>Invalid username try again</p>'

}else if (username === "admin" && password != "1234") { 
    document.getElementById("output").innerHTML = '<p>Invalid password try again</p>'
}
}