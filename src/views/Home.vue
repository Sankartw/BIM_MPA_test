<template>
  <div class="home">
    <ul>
      <li>Go to</li>
      <li>
        <a href="BIM.html">
          bim Us
        </a>
      </li>
    </ul>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
