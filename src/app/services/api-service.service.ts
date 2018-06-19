import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
  public BASE_PATH = "http://localhost:1337";
  // BASE_PATH = 'http://5.77.39.140:1337';
  // BASE_PATH = 'http://localhost:1338';
  projectTableInitCounter = 0;

  constructor(private http: HttpClient) { }

  get(path) {
    return this.http
      .get(this.BASE_PATH + path)
    // .map((res: any) => JSON.parse(res._body));
  }

  post(path, body) {
    return this.http
      .post(this.BASE_PATH + path, body)
    // .map((res: any) => JSON.parse(res._body));
  }

  put(path, body) {
    return this.http
      .put(this.BASE_PATH + path, body)
    // .map((res: any) => JSON.parse(res._body));
  }

  delete(path) {
    return this.http
      .delete(this.BASE_PATH + path)
    // .map((res: any) => JSON.parse(res._body));
  }
}
