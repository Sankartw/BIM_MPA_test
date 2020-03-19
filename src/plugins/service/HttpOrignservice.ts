import HttpBase from '@/plugins/service/HttpBase';

export default class HttpOrignservice extends HttpBase {
  private static instance: HttpOrignservice;
  static getInstance() {
    if (!this.instance) this.instance = new HttpOrignservice();
    return this.instance;
  }
  private constructor() {
    super('https://www.kase.com.tw/testuser/');
  }
}
// 'Access-Control-Allow-Headers': '8',