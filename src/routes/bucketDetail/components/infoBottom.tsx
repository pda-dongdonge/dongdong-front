import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useState } from "react";
import { showToast } from "@/store/toastPopup";
import { useDispatch } from "react-redux";
import { FaRegCopy } from "react-icons/fa6";

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
      dispatch(showToast({id: Date.now(), message: "copied!"}));
    } catch (error) {
      alert("failed");
    }
  };

  return (
    <>
      <FaRegCopy 
      className="cursor-pointer"
      color='gray'
      size='16'
      onClick={()=>copyToClipboard()}
      />
      <div onClick={() => heartClick()}>
        {valid ? (
          <IoIosHeart className="cursor-pointer" size='18' color="#ff869b" />
        ) : (
          <IoIosHeartEmpty className="cursor-pointer" size='18' color="#ff869b"/>
        )}
      </div>
    </>
  );
}
