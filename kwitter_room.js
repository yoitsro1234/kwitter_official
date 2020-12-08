 var username = localStorage.getItem("username");
 document.getElementById("user_name").innerHTML="Welcome, "+username+"!";

 var firebaseConfig = {
  apiKey: "AIzaSyAHdqspbiXXEAAsk9hu-5zbly76rRzkQ4c",
  authDomain: "kwitterofficial.firebaseapp.com",
  projectId: "kwitterofficial",
  storageBucket: "kwitterofficial.appspot.com",
  messagingSenderId: "176467779729",
  appId: "1:176467779729:web:0d0e2b1d14ab2d9192df30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room"
  });
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id ="+Room_names+"onclick = 'redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;

      //End code
      });});}
getData();



function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  console.log(name);
  window.location="kwitter_page.html";
}

function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}