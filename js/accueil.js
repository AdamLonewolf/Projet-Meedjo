
//On vérifie si l'utilisateur est connecté

window.addEventListener("load",() => { 
     isLogin = localStorage.getItem("isLogIn"); 
      if (isLogin != "true"){
    window.location.href = "connexion.html" }});