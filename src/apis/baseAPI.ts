import axios from "axios";
export class BaseApi {
  fetcher;
  constructor(url: string) {
    //미리생성
    axios.defaults.withCredentials = true;
    this.fetcher = axios.create({
      baseURL: url,
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}
