<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg = "靳春野测试" age = "35"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  data () {
    return {
      
    }
  },
  components: {
    HelloWorld
  }
}
</script>