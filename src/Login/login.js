import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  get,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcvP-CKARwGQVtfngRqioI4_OqZ-3sCXA",
  authDomain: "auth-app-8a86c.firebaseapp.com",
  databaseURL: "https://auth-app-8a86c-default-rtdb.firebaseio.com",
  projectId: "auth-app-8a86c",
  storageBucket: "auth-app-8a86c.appspot.com",
  messagingSenderId: "943790962993",
  appId: "1:943790962993:web:fd6ef96347daf83d555810",
  measurementId: "G-Y7E83X5NSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let mainForm = document.getElementById("mainForm");

const SignInUser = (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((credentials) => {
      get(child(dbref, "UsersAuthList/" + credentials.user.uid)).then(
        (snapshot) => {
          if (snapshot.exists) {
            sessionStorage.setItem(
              "user-info",
              JSON.stringify({
                firstname: snapshot.val().firstname,
                lastname: snapshot.val().lastname,
              })
            );
            sessionStorage.setItem(
              "user-creds",
              JSON.stringify(credentials.user)
            );
            window.location.href = "/src/Home/home.html";
          }
        }
      );
      // console.log(credentials.user);
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
};

mainForm.addEventListener("submit", SignInUser);
