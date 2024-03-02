let UserCreads = JSON.parse(sessionStorage.getItem("user-creds"));
let Userinfo = JSON.parse(sessionStorage.getItem("user-info"));

let MsgHead = document.getElementById("msg");
let GreetHead = document.getElementById("greet");
let SignoutBtn = document.getElementById("signoutbutton");

MsgHead.innerHTML = `user with email "${UserCreads.email}" logged in`;
GreetHead.innerHTML = `welcome ${
  Userinfo.firstname + " " + Userinfo.lastname
}!`;

let Signout = () => {
  sessionStorage.removeItem("user-creds");
  sessionStorage.removeItem("user-info");
  window.location.href = "../../index.html";
};

let CheckCred = () => {
  if (!sessionStorage.getItem("user-creds")) {
    window.location.href = "../../index.html";
  } else {
    MsgHead.innerHTML = `user with email "${UserCreads.email}" logged in`;
    GreetHead.innerHTML = `welcome ${
      Userinfo.firstname + " " + Userinfo.lastname
    }!`;
  }
};

window.addEventListener("load", CheckCred);
SignoutBtn.addEventListener("click", Signout);
