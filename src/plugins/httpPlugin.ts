import _Vue from 'vue';
import HttpService from '@/plugins/service/HttpService';

export default function httpPlugin(Vue: typeof _Vue): void {
  Vue.prototype.$http = HttpService.getInstance();
}
declare module 'vue/types/vue' {
  interface Vue {
    $http: HttpService;
  }
}
