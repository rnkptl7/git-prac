console.log("Hello, have a nice day :)");

function fetchData(email, name) {
    console.log(`My name is ${name} and my email is ${email}`)
}

fetchData();

function login(email, password) {
    if(email === password){
        alert("You have to login succesfully!");
    } else{
        alert("Invalid Credentials!")
    }
}

login();