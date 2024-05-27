import React from "react";

type Props = {
  text: string;
  handleClick: () => void;
};
export default function CustomButton({ text, handleClick }: Props) {
  return (
    <div
      className="flex items-center justify-center space-x-2 bg-[#7758F6] text-white px-4 py-2 rounded shadow"
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
