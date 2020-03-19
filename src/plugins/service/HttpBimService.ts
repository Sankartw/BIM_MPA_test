import HttpBase from '@/plugins/service/HttpBase';

export default class HttpBimService extends HttpBase {
  private static instance: HttpBimService;
  static getInstance() {
    if (!this.instance) this.instance = new HttpBimService();
    return this.instance;
  }
  private constructor() {
    super('http://60.251.111.25/BIMWebAPI/');
  }
  login() {
    // return this.post("/Auth", {
    //   Userid: 'kase',
    //   pwd: 'kase@bim'
    // }, {
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://60.251.111.25/',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // });
    return this.post("Auth",
      { UserId: 'kase', pwd: 'kase@bim' },
    );
  }
}
// 'Access-Control-Allow-Headers': '8',