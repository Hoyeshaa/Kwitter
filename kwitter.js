function login(){
    var name = document.getElementById("username").value;
    localStorage.setItem("username",name);
    window.location = "kwitter_room.html";
}