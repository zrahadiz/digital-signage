import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import registerView from '../views/registerView.vue';
import loginView from '../views/loginView.vue';
import homeView from '../views/homeView.vue';
import accountView from '../views/accountView.vue';
import dataView from '../views/dataView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },
    {
      path: '/register',
      name: 'register',
      component: registerView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/account',
      name: 'account',
      component: accountView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: homeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/data',
      name: 'data',
      component: dataView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(), (user) => {
        if(user){
          if(user.emailVerified == true || user.email == 'admin1@gmail.com'){
            removeListener();
            resolve(user);
          }else{
            alert("Please verify you're email first (check on your inbox or spam)");
            router.push('/')
          }
        }else{
          alert("You dont have access!");
          router.push('/')
        }
      },
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }
    else{
      alert("You dont have access!");
      next("/")
    }
  }else{
    next();
  }
});
export default router
