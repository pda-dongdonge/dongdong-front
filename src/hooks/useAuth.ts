import { useDispatch, useSelector } from "react-redux";
import authAPI, { IAuth } from "../apis/authAPI";
import { setUser, clearUser } from "../store/user";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";

const { VITE_BASE_URL } = import.meta.env;
export function useAuth() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const service = new authAPI(VITE_BASE_URL + "auth");
  const [user_id, setUser_id] = useState<string | undefined>(undefined);

  // POST login
  async function login(email: string, password: string) {
    try {
      const res = await service.login(email, password);
      if (res) {
        dispatch(
          setUser({
            email: res.email,
            username: res.username,
            _id: res._id,
            phone: res.phone,
          })
        );
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
        dispatch(
          setUser({
            _id: res._id,
            phone: res.phone,
            email: res.email,
            username: res.username,
          })
        );
        return res;
      } else {
        console.error("signup failed");
      }
    } catch (err) {
      //복구
      console.log("Error to signup", err);
      //실패 케이스에 따라 회원가입 실패 노출(중복 이메일, 잘못된이메일형식, 비번 글자수)
    }
  }
  //POST isEmailVerify 이메일 유효성(중복)체크
  async function isEmailVerify(email: string) {
    try {
      const res = await service.isEmailVerify(email);
      //true: 사용가능한 이메일 false: 중복 이메일
      return res.verify;
    } catch (err) {
      //이메일 중복체크 실패
      console.log("Error to verify email", err);
    }
  }
  //logout 유저정보 clear
  async function logOut() {
    try {
      await service.logout();

      dispatch(clearUser());
    } catch (err) {
      console.log(err);
    }
  }

  //마운트시 로그인여부체크(쿠키)해서 유저정보 세팅
  useEffect(() => {
    async function init() {
      if (!user.email) {
        const res = await service.isLogin();
        console.log(res);
        setUser_id(res._id);
        if (res) {
          dispatch(
            setUser({
              _id: res._id,
              phone: res.phone,
              email: res.email,
              username: res.username,
            })
          );
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
    isEmailVerify,
    user_id,
  };
}
