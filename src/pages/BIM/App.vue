<template>
  <v-app>
    <v-content>
      <a href="/">回本頁</a>

      <v-container>
        <div class="RKING"></div>
        <div class="bimobjall-ctm" style="top:30px; left:30px;" />
        <div class="bimobjall-ctm2" style="top:30px; left:30px;" />
        <!-- <router-view /> -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
// import * as $ from "jquery";

import jquery from "jquery";
const $: JQueryStatic = jquery;

@Component
export default class App extends Vue {
  public test = {};
  mounted() {
    this.testeeee();
  }
  testeeee() {
    //
    $(".RKING").text("获取资源成功！");
    // $(".bimobjall-ctm").
  }
}
</script>
<style lang="scss">
a .dropdown-menu {
  margin-top: -15px;
}
</style>
