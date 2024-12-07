
var registerForm = document.getElementById('form');
var userEmail = document.getElementsByClassName('mewVl')[0].value
var password = document.getElementById('passwordID').value

form.addEventListener('submit',function (e){
    e.preventDefault();
    isValidUser=false;
    console.log(userEmail)
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
            headers:{ 'Content-Type': 'application/json',},

            body:JSON.stringify({email:userEmail,password:password})
        }
    ).then(response=>response.json())
    .then(data=>{
        console.log(data)
        // window.
    })
    
    
})
