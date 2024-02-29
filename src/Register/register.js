import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
      import {
        getDatabase,
        set,
        ref,
      } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
      import {
        getAuth,
        createUserWithEmailAndPassword,
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

      let emailInput = document.getElementById("emailInput");
      let passwordInput = document.getElementById("passwordInput");
      let fnameInput = document.getElementById("fNameInput");
      let lnameInput = document.getElementById("lNameInput");
      let mainForm = document.getElementById("mainForm");

      let RegisterUser = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
          auth,
          emailInput.value,
          passwordInput.value
        )
          .then((credentials) => {
            set(ref(db, "UsersAuthList/" + credentials.user.uid), {
              firstname: fnameInput.value,
              lastname: lnameInput.value,
            });
          })
          .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
          });
      };

      mainForm.addEventListener("submit", RegisterUser);