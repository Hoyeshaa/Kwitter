
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
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+ username + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addroom(){
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose : "adding user"
      });
      localStorage.setItem("roomname",roomname);
      window.location = "kwitter_page.html";
}
function redirecttoroomname(room){
      console.log(room);
      localStorage.setItem("roomname",room);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}