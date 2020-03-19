import Vue from 'vue';
import httpPlugin from '@/plugins/httpPlugin';
import { Component } from 'vue-property-decorator';
Vue.use(httpPlugin);

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);
