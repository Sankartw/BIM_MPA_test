import HttpBimService from '@/plugins/service/HttpBimService';
import HttpOrignservice from '@/plugins/service/HttpOrignservice';
export default class HttpService {
  private static instance: HttpService;
  static getInstance() {
    if (!HttpService.instance)
      HttpService.instance = new HttpService();
    return HttpService.instance;
  }
  private constructor() {
  }
  get bimService() {
    return HttpBimService.getInstance();
  }
  get orignService() {
    return HttpOrignservice.getInstance();
  }
}
