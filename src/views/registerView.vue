<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="formcontainer">
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" v-model="email">

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" v-model="password">

            <label for="pswRepeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" v-model="pswRepeat">
            <hr>
            <button @click="register">Register</button>
        </div>
        
        <div class="container signin">
            <p>Already have an account? <a href="/">Sign in</a>.</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const pswRepeat = ref("");
const router = useRouter();
const auth = getAuth();

const verifyEmail= () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            alert('Verification email has been sent')
            router.push('/home')
        }).catch((error) => {
                // An error ocurred
                console.log(error.code);
                alert(error.message);
        });
}

const register = () => {
    if(password.value == pswRepeat.value){
        createUserWithEmailAndPassword(auth, email.value,password.value).then((data) => {
            console.log("Success");
            console.log(auth.currentUser);
            verifyEmail();
        }).catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
    }else{
        alert("password and repeat password not the same")
    }
}
</script>

<style scoped>
* {box-sizing: border-box}
.formcontainer{
    padding: 20px;
}

/* Add padding to containers */
.container {
    padding: 16px;
    border: 5px solid #f1f1f1;
    background-color: rgb(233, 229, 229);
}

/* Full-width input fields */
input[type=text], input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
}

/* Overwrite default styles of hr */
hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

.registerbtn:hover {
    opacity:1;
}

/* Add a blue text color to links */
a {
    color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
    background-color: #f1f1f1;
    text-align: center;
}

</style>