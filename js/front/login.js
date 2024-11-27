const { error } = require("console");

var registerForm = document.getElementById('form');
var userEmail = document.getElementById('emailID')
var password = document.getElementById('passwordID')

form.addEventListener('submit',function (e){
    e.preventDefault();
    isValidUser=false;
    // for (var i = 0; i < data.length; i++) {
    //     if (emailId === users[i].userEmail && passwordID === users[i].password) {
    //         isValidUser = true;
    //         localStorage.removeItem('attempts');
    //         localStorage.setItem('user', users);
    //         break;
    //     }
    // }
    fetch('http://127.0.0.1:4000/api/users/login',
        {
            method:"POST",
            headers:"'Content-Type': 'application/json'",
            body:JSON.stringify({email:userEmail,password:password})
        }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    }).catch(error)
        console.log(error)
    
})
