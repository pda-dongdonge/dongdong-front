import React from 'react'
import shareIcon from "../../../assets/share.svg";
import heartIcon from "../../../assets/heart.svg";
import heartFillIcon from "../../../assets/heartFill.svg";
import { useState } from "react";

export default function InfoBottom() {
  const [valid, setValid] = useState<boolean>(false);

  const heartClick = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setValid(prev => !prev);
  }

  const shareClick = (e:React.ChangeEvent<HTMLInputElement>):void => {
    alert("클릭됨");
  }

  return (
    <>
      <img className="w-[20px] cursor-pointer" src={shareIcon} onClick={(e) => shareClick(e)}/>
      <div onClick={(e)=> heartClick(e)}>
        {valid ? (
          <img src={heartFillIcon} className="w-[20px] cursor-pointer" />
        ) : (
          <img className="w-[20px] cursor-pointer" src={heartIcon} />
        )}
      </div>
    </>
  );
}
