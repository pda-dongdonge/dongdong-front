import React from "react";
import shareIcon from "../../../assets/share.svg";
import heartIcon from "../../../assets/heart.svg";
import heartFillIcon from "../../../assets/heartFill.svg";
import { useState } from "react";

export default function InfoBottom() {
  const [valid, setValid] = useState<boolean>(false);

  const heartClick = (): // e:React.ChangeEvent<HTMLInputElement>
  void => {
    setValid((prev) => !prev);
    //나중에 로직 추가하기
  };

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("copied");
    } catch (error) {
      alert("failed");
    }
  };

  return (
    <>
      <img
        className="w-[20px] cursor-pointer"
        src={shareIcon}
        onClick={()=>copyToClipboard()}
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
