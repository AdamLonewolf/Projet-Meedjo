const firebaseConfig = {
    apiKey: "AIzaSyCT6GuAkZ8NUJZGL7H-xnctdRFTB_p3hxM",
    authDomain: "projet-kultur.firebaseapp.com",
    projectId: "projet-kultur",
    storageBucket: "projet-kultur.appspot.com",
    messagingSenderId: "413587087006",
    appId: "1:413587087006:web:8825463620b4354a19a58f",
    measurementId: "G-5JBG4DWREK"
  };


  const app = firebase.initializeApp(firebaseConfig);
  //const auth= getAuth(app);
  const auth = app.auth();
  //google
  const provider = new firebase.auth.GoogleAuthProvider();

  var user;

function seconnecter(){
firebase
.auth()
.signInWithPopup(provider)

.then((result) => {
    
    const credential = result.credential;
    const token = credential.accessToken;
    // The signed-in user info.
    connectMethod = "google";
    user = result.user;
    console.log(user)
    localStorage.setItem("isLogIn", "true")
    window.location.href = "index.html";
})
.catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = error.credential;
    });
  }

  document.getElementById("google").addEventListener("click",seconnecter);

  