<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <div class="formcontainer">
      <div class="imgcontainer">
        <img src="@/assets/dsBanner.png" alt = "banner" class="banner">
      </div>

      <div class="container">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" v-model="email" required>
            
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="password" required>
            
        <button @click="login">Login</button>  
        <p class="forgot" style="text-align:right" @click = "forgotPass">Forgot Password?</p>
      </div>
  </div>
  <p class="errorText" v-if="errMsg">{{ errMsg}}</p>

  <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Reset Password</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <h3>Input Email</h3>
                <div id="inputEmail">
                    <label for="forgotEmail"><b>Email : </b></label>
                    <input type="email" placeholder="Enter Email" v-model="forgotEmail">
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Sent Reset Password</button>
            </footer>
        </div>    
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'vue-router';

//authentication variable
let auth;
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
let forgotEmail = ref();

//modal variable
let modal;
let modalClose;
let sentButton;

onMounted(() =>{
  auth = getAuth()
  modal = document.querySelector('.modal');
  modalClose = document.querySelector('.delete');
  sentButton = document.querySelector('.button');
  
  modalClose.addEventListener('click', () => {
    modal.classList.remove('is-active')
  })
  sentButton.addEventListener('click', () => {
    sendPasswordResetEmail(auth, forgotEmail.value)
    .then(() => {
      alert("email sent")
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
  });
});

const login = () => {
  signInWithEmailAndPassword(auth, email.value,password.value).then((data) => {
    console.log("Success sign in");
    console.log(auth.currentUser.email)
    if(auth.currentUser.emailVerified == true || auth.currentUser.email == 'admin1@gmail.com'){
      router.push('/home')
    }
    else{
      alert("Please verify you're email first (check on your inbox or spam)")
    }
  }).catch((error) => {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
        errMsg.value = "Invalid Email";
        break;
      case "auth/user-not-found":
        errMsg.value = "No account with that email was found"
        break;
      case "auth/wrong-password":
        errMsg.value = "Incorrect Password";
        break;
      case "auth/user-disabled":
        errMsg.value = "The user was disabled";
        break;
      default:
        errMsg.value = "Email or password was incorrect";
        break;
    }alert(errMsg.value)
  });
};

const forgotPass = () => {
  modal.classList.add('is-active')
}
</script>

<style scoped>
@import 'bulma/css/bulma.min.css';
.formcontainer {
	background-color: 	#fde4f2;
	margin: auto;
  width: 50%;
  border-radius: 2%;
}

.imgcontainer img{
	width: 40%;
	height: 50%;
  padding: 10px;
}

.container {
	width: auto;
	margin: auto;
	padding: 3%;
  font-size: 100%;
	background-color: violet;
  border-radius: 2%;
}

/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

.errorText{
  text-align: center;
}

.forgot{
    color: blue;
}

.forgot:hover{
    color: black;
    cursor: pointer;
}
</style>