import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useEffect, useState } from "react";
import { removeToast, showToast } from "@/store/toastPopup";
import { useDispatch } from "react-redux";
import { FaRegCopy } from "react-icons/fa6";
import { useBucketlist } from "@/hooks/useBucketlist";

type InfoBottomProps = {
  bucketId: string;
}

export default function InfoBottom({bucketId}:InfoBottomProps) {
  const [valid, setValid] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {likeBucket, IsLikedBucket} = useBucketlist();

  useEffect(()=>{
    const check  = async () => {
      IsLikedBucket(bucketId)
      .then(res=> {
        // console.log(res.data.isLiked);
        setValid(res?.data.isLiked);
      });
    }
    check();
  }, []);

  const heartClick = (): // e:React.ChangeEvent<HTMLInputElement>
  void => {
    setValid((prev) => !prev);
    likeBucket(bucketId).then(res=>{
      if (res?.status === 200) {
        dispatch(showToast({id: Date.now(), message: res.data.message}))
      }
    });
  };

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const toastId = Date.now()
      dispatch(showToast({ id: toastId, message: "copied!" }));
      // setTimeout(()=>{
      //   dispatch(removeToast(toastId))
      // }, 2000)
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
          <IoIosHeart className="cursor-pointer" size='19' color="#ff869b" />
        ) : (
          <IoIosHeartEmpty className="cursor-pointer" size='19' color="#ff869b"/>
        )}
      </div>
    </>
  );
}
