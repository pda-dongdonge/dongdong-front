import React, { useState, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function SignPage() {
  const { user, login, logOut } = useAuth();
  // ref로 바꾸기
  const [inputValue, setInputValue] = useState("");
  const [inputpw, setInputPw] = useState("");
  const refId = useRef<HTMLInputElement>(null);
  const refPw = useRef<HTMLInputElement>(null);
  const handleLogin = async () => {
    await login(inputValue, inputpw);
  };
  const handleLogout = async () => {
    await logOut();
  };
  const enterInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue && inputpw) login(inputValue, inputpw);
      refId?.current?.blur();
      refPw?.current?.blur();
    }
  };

  return !user.email ? (
    <div>
      <div className="input-wrap">
        <p style={{ color: "#2c2c2cd" }}>email</p>
        <input
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={inputValue}
          ref={refId}
          type="text"
          onKeyDown={enterInput}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ background: "white", color: "black" }}
        ></input>
      </div>
      <div className="input-wrap">
        <p style={{ color: "#2c2c2cd" }}>password</p>
        <input
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={inputpw}
          ref={refPw}
          onKeyDown={enterInput}
          type="password"
          onChange={(e) => setInputPw(e.target.value)}
          style={{ background: "white", color: "black" }}
        ></input>
      </div>
      <button
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  ) : (
    <div>
      <p>환영합니다 {user.username}</p>
      <button
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
}
