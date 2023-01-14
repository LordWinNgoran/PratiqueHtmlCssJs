// let username = document.getElementById('username');
// let usernamevalue, email,password;

// username.addEventListener('blur', function (e) {
//     if (e.target.value.length == 0) {
//         document.querySelector('.username').style.display="block"
//      }
//      usernamevalue = e.target.value

// })

// username.addEventListener('focus', function (e) {
//     document.querySelector('.username').style.display="none"
     
// })
// // input mail
// let usermail = document.getElementById('user-mail');
// usermail.addEventListener('blur', function (e) {
//     if (e.target.value.length == 0) {
        

//         document.querySelector('.user-mail').style.display="block"
//      }
//      email = e.target.value
// })

// usermail.addEventListener('focus', function (e) {
//     document.querySelector('.user-mail').style.display="none"
     
// })
// //input password
// let userpassword = document.getElementById('user-password');
// userpassword.addEventListener('blur', function (e) {
//     if (e.target.value.length == 0) {

//         document.querySelector('.user-password').style.display="block"
//      }
//      else if (e.target.value.length  < 8) {
//         document.querySelector('.user-password').style.display="block"
//         document.querySelector('.user-password').textContent="Veuillez saisir un mot de passe superieur a 8 caracteres"
//      }
//      password = e.target.value


// })

// userpassword.addEventListener('focus', function (e) {
//     document.querySelector('.user-password').style.display="none"
     
// })


// let formsubmit = document.getElementById('submit-btn')
// formsubmit.addEventListener('click',function(e)
// {
//     e.preventDefault()
//     console.log(usernamevalue,email,password)
//     let userobj={
//         username : usernamevalue,
//         mail : email,
//         password : btoa(password)

//     }

//     localStorage.setItem('userinfo',JSON.stringify(userobj))
//         return false;
// })

//Login
 let loginsubmit = document.getElementById("loginsubmit-btn")
 loginsubmit.addEventListener('click', function(e){
    e.preventDefault()
    //Recuperation des variables
    let loginusername = document.getElementById("loginusername").value
    let loginpassowrd = document.getElementById("loginpassowrd").value
    console.log(loginusername,loginpassowrd);

    // Récupertration des donnés
    let userinfos = JSON.parse(localStorage.getItem("userinfo"))
    console.log(userinfos)
    //Decoder le password
    let pwd = atob(userinfos.password)
    console.log(pwd)

    if (loginusername === userinfos.username && loginpassowrd === pwd ){
        //Recuperation du mot de passe dans le dashboard
        window.location = "file:///C:/Users/LordWinNgoran/Documents/azalamanga/dashboard.html"
    } else {
        alert("Votre login ou mot de passe est incorrect")
    }
    // 12345678901
    // audrey


//Empêcher l'envoie du formulaire
    return false;

 })

//  Comment gerer les class {Voir avce le Formateur}