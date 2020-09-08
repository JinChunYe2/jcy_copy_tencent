<template>
  <div class="home">
    <Hello-World msg="Welcome to Your Vue.js App" age="17"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
