import { BaseApi } from "./baseAPI";

interface IAuth {
  email: string;
  password: string;
}

export default class authAPI extends BaseApi {
  async serverLogin(auth: IAuth) {
    const resp = await this.fetcher.post("/login", {
      email: auth.email,
      password: auth.password,
    });
    return resp.data;
  }
  async serverSignUp(auth: IAuth) {
    const resp = await this.fetcher.post("/signup", {
      email: auth.email,
      password: auth.password,
    });
    return resp.data;
  }
}
