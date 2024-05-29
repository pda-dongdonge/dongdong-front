import React from "react";
import shareIcon from "../../../assets/share.svg";
import heartIcon from "../../../assets/heart.svg";
import heartFillIcon from "../../../assets/heartFill.svg";
import { useState } from "react";
import { showToast } from "@/store/toastPopup";
import { useDispatch } from "react-redux";

export default function InfoBottom() {
  const [valid, setValid] = useState<boolean>(false);
  const dispatch = useDispatch();

  const heartClick = (): // e:React.ChangeEvent<HTMLInputElement>
  void => {
    setValid((prev) => !prev);
    //나중에 로직 추가하기
  };

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      dispatch(showToast({ id: Date.now(), message: "copied!" }));
    } catch (error) {
      alert("failed");
    }
  };

  return (
    <>
      <img
        className="w-[20px] cursor-pointer"
        src={shareIcon}
        onClick={() => copyToClipboard()}
      />
      <div onClick={() => heartClick()}>
        {valid ? (
          <img src={heartFillIcon} className="w-[20px] cursor-pointer" />
        ) : (
          <img className="w-[20px] cursor-pointer" src={heartIcon} />
        )}
      </div>
    </>
  );
}
