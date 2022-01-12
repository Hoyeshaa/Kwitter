//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA-qqxU8Op2i8407ciQwJ5Ely9XdsFNc8g",
      authDomain: "kwitter-710d5.firebaseapp.com",
      databaseURL: "https://kwitter-710d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-710d5",
      storageBucket: "kwitter-710d5.appspot.com",
      messagingSenderId: "154347161161",
      appId: "1:154347161161:web:21078c76b08753d387e198"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user = localStorage.getItem("username");
room = localStorage.getItem("roomname");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}
function send(){
msg = document.getElementById("text").value;
firebase.database().ref(room).push({
      name:user,
      message:msg,
      likes:0
})
document.getElementById("text").value = "";
}