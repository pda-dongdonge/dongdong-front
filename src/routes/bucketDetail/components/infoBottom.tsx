// import React from 'react'
import shareIcon from "../../../assets/share.svg";
import heartIcon from "../../../assets/heart.svg";

// type Props = {}

export default function InfoBottom() {
  return (
    <>
    <img className="w-[20px] cursor-pointer" src={shareIcon}/>
    <img className="w-[20px] cursor-pointer" src={heartIcon}/>
    </>
  )
}