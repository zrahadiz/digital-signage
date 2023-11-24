<template>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Navigation Bar -->	
	<div class="navContainer">
		<nav class="wrapper">
			<div class="brand">
				<div class="firstname">digital</div>
				<div class="lastname">signage</div>
			</div>
			<ul class="navigation">
				<li><a href="/home" :class="{ active: $route.path == '/home' }">upload</a></li>
				<li><a href="/data" :class="{ active: $route.path == '/data' }">manage data</a></li>
				<li><a href="/account">
						<img src="@/assets/profile.png" alt="profile" />
					</a>
				</li>
			</ul>
		</nav>
	</div>	
	<!-- End Of Navigation Bar -->
</template>


<script setup>

</script>

<style scoped>
.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	width: 100%;
	height: 80px;
	background-color: violet;
	box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.5);
}

.brand{
	display: flex;
	flex-direction: row;
	font-size: 150%;
	padding: 15px;
	text-transform: capitalize;
}

.firstname{
	color: white;
	font-weight:bold;
}

.lastname{
	color: black;
	font-weight: 400;
	padding-left:4px;
}

.navigation{
	display: flex;
	justify-content: center;
	align-items: center;
}

.navigation>li{
	list-style-type: none;
	padding: 15px;
}

.navigation>li>a{
	color: white;
	font-size: 100%;
	text-decoration: none;
	text-transform: capitalize;
}

.navigation>li>a:hover{
	color: crimson;
	transition: all .3s ease-in-out;
}

.navigation>li>a>img{
	width: 5vh;
	height: 5vh;
	border-radius: 50px;
	margin-right: 15px;
}

.navigation>li>a>img:hover{
	width: 6vh;
	height: 6vh;
	border-radius: 65px;
}

.active{
	background-color: crimson;
	color: white;
	padding: 15px;
	border-radius: 20px;
}

.active:hover{
	color: white !important;
}

</style>
