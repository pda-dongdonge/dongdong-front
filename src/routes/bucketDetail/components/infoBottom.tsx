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

  const shareClick = (): // e:React.ChangeEvent<HTMLInputElement>
  void => {
    alert("클릭됨");
    //클립보드에 복사되었습니다! 토스트 팝업으로 띄우기 이쁨게
  };

  return (
    <>
      <img
        className="w-[20px] cursor-pointer"
        src={shareIcon}
        onClick={() => shareClick()}
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
