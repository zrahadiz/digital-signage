<template>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="fullcontainer">
        <!-- Navigation Bar -->
        <div class="navcontainer">	
            <nav class="wrapper">
                <div class="brand">
                <div class="firstname">digital</div>
                <div class="lastname">signage</div>
                </div>
            </nav>
        </div>
        <!-- End Of Navigation Bar -->
    </div>
</template>

<style scoped>
.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	padding: 15px;
	width: 100vmax;
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
	font-weight: 700;
}

.lastname{
	color: black;
	font-weight: 400;
	padding-left:4px;
}
</style>
