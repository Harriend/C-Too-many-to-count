const firebaseConfig = {
    apiKey: "AIzaSyCZrLbFk77uAL4Mr-FECzLLroCPhL_n5NU",
    authDomain: "kwitter20-c45ac.firebaseapp.com",
    databaseURL: "https://kwitter20-c45ac-default-rtdb.firebaseio.com",
    projectId: "kwitter20-c45ac",
    storageBucket: "kwitter20-c45ac.appspot.com",
    messagingSenderId: "218294659837",
    appId: "1:218294659837:web:fd1dcffc695a62f4beec94",
    measurementId: "G-40RK5C38SQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_nama = localStorage.getItem("room_name");

  function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "login.html"
  }

  function send(){
      msg = document.getElementById("message").value;
      firebase.database().ref("/").child(msg).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("message").value = "";
  }