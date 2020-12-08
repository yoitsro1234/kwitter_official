var user_name = localStorage.getItem("username");
var room_name = localStorage.getItem("room_name");

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

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name = user_name,
            message = msg,
            like=  0
      });
      document.getElementById("msg").value="";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];

      name_with_tag = "<h4>"+name+"<img id='user_tick' src = tick.png></h4>";
      message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
      like_button = "<button id="+like_button+"' class = 'btn btn-warning' value ="+like+"onclick ='updateLike(this.id)";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like ["+like+"]</span></button><hr>";

      row = name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML=row;

//End code
      } });  }); }
getData();

function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      })
}

function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}       

