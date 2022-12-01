var firebaseConfig = {
    apiKey: "AIzaSyAhpmoWHY24_GXbEEshnOwChfoABzu2DtE",
      authDomain: "smartodishahackathon-ac6b3.firebaseapp.com",
      databaseURL: "https://smartodishahackathon-ac6b3-default-rtdb.firebaseio.com",
      projectId: "smartodishahackathon-ac6b3",
      storageBucket: "smartodishahackathon-ac6b3.appspot.com",
      messagingSenderId: "74474433499",
      appId: "1:74474433499:web:90be9ceca5b5dba00c55fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var stat=0;
  
var button=document.querySelector("#btn5");
console.log(button.innerHTML);
var button1=document.querySelector("#btn6");
console.log(button1.innerHTML);
var button2=document.querySelector("#btn7");
console.log(button2.innerHTML);
var button3=document.querySelector("#btn8");
console.log(button3.innerHTML);
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
// var user_data = {
//     email : email,
//     full_name : full_name,
//     account_no : account_no,
//     ifsc_code : ifsc_code,
//     occupation : occupation,
//     last_login : Date.now()
// }

//button.disabled=false;


//  function stateHandle() {
//     if (document.querySelector(".input").value === "") {
//         button.disabled = true; //button is enabled
//     } else {
//         button.disabled = false; //button remains disabled
//     }
// }


