// alert("this is profile");

async function getData() {
await fetch('http://127.0.0.1:5000/api/users',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    var i = 1;
    data.forEach(element => {
        var updateButton = document.getElementById("updateForm")
        updateButton.className="updateButton"
        updateButton.innerHTML="update"
        updateButton.setAttribute('data-bs-toggle',"modal")
        updateButton.setAttribute('data-bs-target',"#exam pleModal")
        updateButton.onclick=function(){
            let elementId=document.getElementById("updateId");
            let firstName=document.getElementById("updatefirstName");
            let lastName =document.getElementById("updatelastName");
            let emailAddress=document.getElementById("updateemailAddress");
            let phoneNumber=document.getElementById("updatephoneNumber");
            let password=document.getElementById("updatepassword");
            let Petsname=document.getElementById("updatePetsname");

            elementId.value=element._id;
            firstName.value=element.username;
            lastName.value=element.username;
            emailAddress.value=element.username;
            phoneNumber.value=element.username;
            password.value=element.username;
            petsname.value=element.phone;
            console.log(username);
        }

    allData = data;
    });
}).catch(error => {
    console.error('Error:', error);
})
}
getData()
console.log(allData);


var updateForm=document.getElementById("updateForm");
updateForm.addEventListener('submit',function(e){
    e.preventDefault();
    var id=document.getElementById("updateId").value;
    var firstname = document.getElementById("firstName").value;
    var lastname=document.getElementById("lastName").value;
    var email=document.getElementById("emailAddress").value;
    var phonenumber = document.getElementById("phoneNumber").value;
    var password=document.getElementById("password").value;
    var petsname=document.getElementById("Petsname").value;
    var updateData={firstname:firstname,lastname:lastname,phonenumber:phonenumber,password:hashedPassword,email:email,petsname:petsname}
    fetch(`http://127.0.0.1:5000/api/users/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(updateData)
    }).then(respone=>respone.json()).then(
        data=>(console.log(data))
    ).catch(error=>console.error('Errors:',error));
})
