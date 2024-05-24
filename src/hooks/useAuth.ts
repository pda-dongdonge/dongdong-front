import { useDispatch, useSelector } from "react-redux";
import authAPI, { IAuth } from "../apis/authAPI";
import { useEffect } from "react";
import { setUser, clearUser } from "../store/reducer";
import { RootState } from "../store/store";

const { VITE_BASE_URL } = import.meta.env;
export function useAuth() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const service = new authAPI(VITE_BASE_URL + "auth");

  // POST login
  async function login(email: string, password: string) {
    try {
      const res = await service.login(email, password);
      if (res) {
        dispatch(setUser({ email: res.email, username: res.username }));
      } else {
        console.error("Login failed");
      }
    } catch (err) {
      //복구
      console.log("Error to login", err);
      //실패 케이스에 따라 로그아웃 실패 노출(존재하지않는계정 )
    }
  }

  // POST signup
  async function signUp({ email, username, phone, password }: IAuth) {
    try {
      const res = await service.signUp({
        email,
        username,
        phone,
        password,
      });
      if (res) {
        dispatch(setUser({ email: res.email, username: res.username }));
      } else {
        console.error("signup failed");
      }
    } catch (err) {
      //복구
      console.log("Error to signup", err);
      //실패 케이스에 따라 회원가입 실패 노출(중복 이메일, 잘못된이메일형식, 비번 글자수)
    }
  }
  async function logOut() {
    try {
      await service.logout();

      dispatch(clearUser());
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    async function init() {
      if (!user.email) {
        const res = await service.isLogin();
        console.log(res);
        if (res) {
          dispatch(setUser({ email: res.email, username: res.username }));
        }
      }
    }
    init();
  }, []);
  return {
    user,
    login,
    signUp,
    logOut,
  };
}
