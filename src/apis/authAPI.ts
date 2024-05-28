import { BaseApi } from "./baseAPI";

export interface IAuth {
  email: string;
  username: string;
  password: string;
  phone?: string;
}

export default class authAPI extends BaseApi {
  async login(email: string, password: string) {
    const resp = await this.fetcher.post("/login", {
      email: email,
      password: password,
    });
    return resp.data;
  }
  async signUp(auth: IAuth) {
    const resp = await this.fetcher.post("/register", {
      email: auth.email,
      username: auth.username,
      phone: auth.phone,
      password: auth.password,
    });
    return resp.data;
  }
  async isEmailVerify(email: string) {
    const resp = await this.fetcher.post("/emailverify", {
      email,
    });
    return resp.data;
  }
  async isLogin() {
    try {
      const resp = await this.fetcher.get("/islogin");
      return resp.data;
    } catch (err) {
      return;
    }
  }
  async logout() {
    const resp = await this.fetcher.get("/logout");
    return resp.data;
  }
}
