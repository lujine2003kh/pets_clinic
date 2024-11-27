alert("hello from sighnup page!")
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
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value,
        Petsname:Petsname.value,
        phoneNumber:phoneNumber.value
    }
    
    allUsers.push(userData);
    console.log(allUsers);   
    fetch('http://127.0.0.1:4000/api/createusers',
        {
            method:"POST",
            headers:"'Content-Type': 'application/json'",
            body:JSON.stringify({firstname:firstName,lastname:lastName,phonenumber:phoneNumber,password:password,email:email,Petsname:Petsname})
        }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    }).catch(error)
        console.log(error) 
})
