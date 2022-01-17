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
function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
name_tag = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_tag = "<h4 class='message_h4'>"+message+"</h4>";
button = "<button class='btn btn-warning' id='"+firebase_message_id+"' onclick='update(this.id)' value="+like+">";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'> likes: "+like+"</span> </button> <hr>";
row = name_tag + message_tag + button + span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}
function update(messageid){
      currentlikes = document.getElementById(messageid).value;
      currentlikes = Number(currentlikes) + 1;
      firebase.database().ref(room).child(messageid).update({
            likes: currentlikes,
      });
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