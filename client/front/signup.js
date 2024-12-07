
// alert("hello from sighnup page!")
var registerForm = document.getElementById('registerForm');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('emailAddress');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('Petsname');
var phoneNumber = document.getElementById('phoneNumber');

registerForm.addEventListener('submit',function (e){
    e.preventDefault();
    var userData={
        firstname:firstName.value,
        lastname:lastName.value,
        email:email.value,
        password:password.value,
        petsname:Petsname.value,
        phonenumber:phoneNumber.value
    }
    
    // allUsers.push(userData);
    console.log(userData);   
    fetch('http://127.0.0.1:4000/api/createusers',
        {
            method:"POST",
            headers:{ 'Content-Type': 'application/json',},

            body:JSON.stringify(userData)
        }
    ).then(response=>response.json())
    .then(data=>{
        console.log(data)
        // window.
    })
})
