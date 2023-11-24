<template>
    <div class="container">
        <h2 class="subtitle is-2">Profile Information</h2>
        <p>Email : {{email}}</p>
        <p>Email Verified : {{emailVerified}}</p>
        <p id="pass" @click="changePass">Change Password</p>
        <p><a href="/register">Create New Account</a></p>
        <p><button class="button is-danger" @click="handleSignOut" v-if="isLoggedin">Logout</button></p>
        <p id="copyright">Image by <a href="https://www.freepik.com/free-photo/delicious-ice-cream-cones_28335521.htm#query=ice%20cream&position=44&from_view=keyword&track=ais">Freepik</a></p>
    </div>

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Change Password</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <h3>Enter New Password </h3>
                <div id="inputPassword">
                    <label for="password"><b>New Password : </b></label>
                    <input type="password" placeholder="Enter Password" v-model="password">
                </div>
                <div id="inputPassword">
                    <label for="pswRepeat"><b>Repeat Password : </b></label>
                    <input type="password" placeholder="Repeat Password" v-model="pswRepeat">
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
            </footer>
        </div>
    </div>
    
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut, updatePassword, sendEmailVerification } from "firebase/auth";
import { useRouter } from "vue-router"

const router = useRouter();
const isLoggedin = ref(false); 
let password = ref();
let pswRepeat = ref();

//firebase auth variable
let auth;
let email; 
let emailVerified = false;

//modal variable
let modal;
let modalClose;
let saveButton;

onMounted(() => {
    //firebase auth detail
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user){
            isLoggedin.value = true;
            emailVerified = user.emailVerified
            user.providerData.forEach((profile) => {
                email = profile.email
            });
        } else{
            isLoggedin.value = false;
        }
    });

    modal = document.querySelector('.modal'); //selector open modal change password
    modalClose = document.querySelector('.delete'); //selector close modal change password
    saveButton = document.querySelector('.button'); //selector save button change password
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('is-active')
    })

    saveButton.addEventListener('click', () => {
        if(password.value == pswRepeat.value && password.value != null){
            const user = auth.currentUser;
            const newPassword = password.value;

            updatePassword(user, newPassword).then(() => {
                // Update successful.
                alert('Update Successfull')
            }).catch((error) => {
                // An error ocurred
                console.log(error.code);
                alert(error.message);
            });
        }else{
            alert("Please input the same value for password and password repeat");
        }
    })
});

const changePass = () => {
    modal.classList.add('is-active')
}

const handleSignOut = () => {
    signOut(auth).then(()=>{
        router.push("/")
    });
};
</script>

<style scoped>
@import 'bulma/css/bulma.min.css';
*{
    box-sizing: border-box;
}

body{
	background-color: lightcyan;
}

h2{
    margin: 10px;
}

p{
    font-size: 1.2em;
}

#copyright{
    position: absolute;
    bottom: 8px;
    right: 16px;
    font-size: 18px;
    color: white;
}

.container {
    margin-top: 20px;
    width: 80%;
    padding: 5px;
    border: 5px solid #f1f1f1;
    background-image: url(@/assets/ice-creambg1.jpg);
    background-size: 100%;
    background-position-y: 22%;
}

.container p{
    padding: 10px;
}

#pass{
    color: #485fc7;
}

#pass:hover{
    color: black;
    cursor: pointer;
}
#inputPassword{
    margin-top: 15px;
}
</style>