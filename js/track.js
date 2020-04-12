firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML =  email_id;

    }

  }
});


function logout(){
    firebase.auth().signOut();
    window.location.href = "index.html";
}
  