
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addroom(){
      username = document.getElementById("roomname").value;
      firebase.database().ref("/").child(username).update({
            purpose : "adding user"
      });
}