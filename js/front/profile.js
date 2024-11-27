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
        var updateButton = document.createElement("button")
        updateButton.className="updateButton"
        updateButton.innerHTML="update"
        updateButton.setAttribute('data-bs-toggle',"modal")
        updateButton.setAttribute('data-bs-target',"#exam pleModal")
        updateButton.onclick=function(){
            let username=document.getElementById("updateUsername");
            let phone =document.getElementById("updatePhone");
            let elementId=document.getElementById("updateId");
            username.value=element.username;
            phone.value=element.phone;
            elementId.value=element._id;
            console.log(username);
        }
        cell5.append(updateButton)
        var cell6 = document.createElement("td");
        var daleteButton = document.createElement("button")
        daleteButton.onclick=function(){
            deleteUser(element._id)
        }

        daleteButton.innerHTML="delete"

        cell6.append(daleteButton)
        cell4.innerHTML=i;
        cell1.innerHTML = element._id;
        cell2.innerHTML = element.username;
        cell3.innerHTML = element.phone;
        row.appendChild(cell4);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell5);
        row.appendChild(cell6);
        table.children[1].appendChild(row);
        i++;

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
