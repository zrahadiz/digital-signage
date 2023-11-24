<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import registerView from '../src/views/registerView.vue'
import LNavbar from './components/accountNavbar.vue'
import GNavbar from './components/genNavbar.vue'
</script>

<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <header>
    <div v-if="$route.path == '/'">
      <LNavbar />
    </div>
    <div v-else>
      <GNavbar />
    </div>   
  </header>

  <RouterView />
</template>

<script>
export default{
	data() {
		return{
			activeStatus : 'home'
		}
	}
};
</script>

<style scoped>

</style>
