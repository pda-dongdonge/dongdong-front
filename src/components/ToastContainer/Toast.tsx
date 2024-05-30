// import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

type Props = {
    message: string;
}

export default function Toast({message}: Props) {
  return (
    <div 
    // style={{transform: 'translateY(-20px)', transition: "transform 0.5s ease" }}
    className="bg-zinc-400 flex gap-4 py-[1rem] px-[1.25rem] items-center rounded-[10px]">
        <FaCheckCircle color="#f0e3ff" />
        <p className="m-0 text-current text-white">{message}</p>
    </div>
  )
}