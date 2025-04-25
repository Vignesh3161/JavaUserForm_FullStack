var url = "http://localhost:9000/userdata/";

document.getElementById("user_form").addEventListener("submit", (z) => {
  z.preventDefault();
  var user_form = {
    username: document.getElementById("u_name").value.trim(),
    email: document.getElementById("u_email").value.trim(),
    phoneno: document.getElementById("u_phone").value,
  };

  //  SEND

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_form),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
    }).then(data => {
      console.log(user_form)
      alert('Submitted Successfully');
    })
    .catch((error) => {
      console.log(error);
    });
});

//  GET

var arr = {};
var i;
  

fetch(`${url}get/`,{
  method:"GET",
  // mode: 'no-cors'
}).then((response) => {
    console.log(response.message)
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    arr = data;
    const tbody = document.getElementById("tbody");

    arr.forEach((read) => {
      let tr = document.createElement("tr");
      tr.className =
        "hover:bg-cyan-700 hover:text-white";
      let td1 = document.createElement("td");
      td1.className = "px-6 py-4 text-center";
      td1.textContent = read["id"];
      let td2 = document.createElement("td");
      td2.className = "px-6 py-4 text-center";
      td2.textContent = read["username"];
      let td3 = document.createElement("td");
      td3.className = "px-6 py-4 text-center";
      td3.textContent = read["email"];
      let td4 = document.createElement("td");
      td4.className = "px-6 py-4 text-center";
      td4.textContent = read["phoneno"];
      // update
      let td5 = document.createElement("td");
      td5.className = "px-6 py-4 text-center";
      let btn1 = document.createElement("button");
      btn1.className = "border-2 border-amber-500 bg-amber-500 px-4 rounded-md hover:bg-neutral-200 hover:text-cyan-700";
      btn1.onclick=()=>{
        update_btn(read.id);
      }
      btn1.textContent = "UPDATE";
      td5.append(btn1);
      //  delete
      let td6 = document.createElement("td");
      td6.className = "px-6 py-4 text-center";
      let btn2 = document.createElement("button");
      btn2.className = "border-2 border-amber-500 bg-amber-500 px-4 rounded-md hover:bg-neutral-200 hover:text-cyan-700";
      btn2.onclick = () => {
        delete_btn(read.id);
      };
      btn2.textContent = "DELETE";
      td6.append(btn2);
      tr.append(td1, td2, td3, td4, td5, td6);
      tbody.append(tr);
    });
  })
  .catch((error) => {
    console.log(error);
  });


// UPDATE BUTTON
var num;
let update_btn=(id)=>{
  num=id;
  document.getElementById('new_user_form').style='display:none;'
  document.getElementById('update_form').style='display:block;'
  fetch(`${url}${id}`,{
    method:'GET',
  }).then(response=>{
     return response.json();
  }).then(data=>{
    let nameinput=document.getElementById('uname');
    nameinput.value=data['username'];
    let emailinput=document.getElementById('email');
    emailinput.value=data['email'];
    let phoninput=document.getElementById('phone');
    phoninput.value=data['phoneno'];
 }).catch()

}

document.getElementById('update_user_form').addEventListener('click',() => {
  let data={
    username:document.getElementById('uname').value,
    email:document.getElementById('email').value,
    phoneno:document.getElementById('phone').value,
  }
  fetch(`${url}${num}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
  }).then(response => {
    if(response.ok){
      return response.json();
    }
  })

});


//  DELETE BUTTON

let delete_btn = (id) => {
  fetch(`${url}${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        console.log("DELETE RESPONSE NOT OK");
      }
    }).then(remo =>{
      alert(id + " DELETED SUCCESS FULLY");
      // fetchData();
    })
    .catch((error) => {
      console.log("delete error = " + error);
    });
};
