// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDzj9CgGKCvohkPG9Y_94sMlo9UEfLOFgE",
      authDomain: "kwitter-3e922.firebaseapp.com",
      databaseURL: "https://kwitter-3e922-default-rtdb.firebaseio.com",
      projectId: "kwitter-3e922",
      storageBucket: "kwitter-3e922.appspot.com",
      messagingSenderId: "22035426984",
      appId: "1:22035426984:web:e43ec0bd32150320df1c9d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Rooms"
      });

      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'> # " + room_name + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(){

      console.log(room_name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

}

function logOut(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
