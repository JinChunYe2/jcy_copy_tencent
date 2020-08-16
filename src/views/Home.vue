<template>
	<div class="home">
		<h1 class = "one" @click = "onTimeUp()">123</h1>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
	name: "Home",
	// components: {
	// 	HelloWorld
	// },
	created(){
		
		
	},
	methods: {
        onTimeUp() {
			$('.one').css("color","red"); 
			console.log($)
        },
    },
	
};
</script>
