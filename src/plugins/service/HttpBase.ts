import router from '@/router';
import Vue from "vue";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';
import store from '@/store';
export default abstract class HttpBase {
    private http: AxiosInstance;
    get baseUrl() {
        return this.http.defaults.baseURL;
    }
    constructor(baseURL: string, withCredentials?: boolean) {
        this.http = axios.create({
            baseURL,
            // withCredentials: withCredentials === undefined ? true : withCredentials
            // withCredentials: true
        });
        this.http.interceptors.request.use((request) => {
            request.headers.Authorization = `Bearer ${store.state.token}`;
            return request;
        });
        this.http.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            router.push('Unauthorized');
                            break;
                        default:
                            break;
                    }
                }
                throw error;
            },
        );
    }

    public get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
        return this.http.get(url, config);
    }
    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
        return this.http.post(url, data, config);
    }
}
