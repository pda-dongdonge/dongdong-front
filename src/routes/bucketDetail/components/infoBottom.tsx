import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useEffect, useState } from "react";
import { showToast } from "@/store/toastPopup";
import { useDispatch } from "react-redux";
import { FaRegCopy } from "react-icons/fa6";
import { useBucketlist } from "@/hooks/useBucketlist";
import { useSWRConfig } from "swr";
import useModal from "@/hooks/useModal";

type InfoBottomProps = {
  bucketId: string;
};

export default function InfoBottom({ bucketId }: InfoBottomProps) {
  const [valid, setValid] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { likeBucket, IsLikedBucket } = useBucketlist();
  const { mutate } = useSWRConfig();
  const { open, close } = useModal();
  useEffect(() => {
    const check = async () => {
      IsLikedBucket(bucketId).then(res => {
        // console.log(res.data.isLiked);
        setValid(res?.data.isLiked);
      });
    };
    check();
  }, []);

  const heartClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    setValid(prev => !prev);
    likeBucket(bucketId)
      .then(res => {
        if (res?.status === 200) {
          dispatch(showToast({ id: Date.now(), message: res.data.message }));
        }
      })
      .then(() => {
        // 버킷 상태 업데이트
        mutate(() => true);
      });
  };

  const copyToClipboard = async (
    e: React.MouseEvent<SVGElement, MouseEvent>
  ): Promise<void> => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(window.location.href);
      const toastId = Date.now();
      dispatch(showToast({ id: toastId, message: "copied!" }));
      // setTimeout(()=>{
      //   dispatch(removeToast(toastId))
      // }, 2000)
    } catch (error) {
      //alert("failed");
      open("Fail", "실패했어요...", close);
    }
  };

  return (
    <>
      <FaRegCopy
        className="cursor-pointer"
        color="gray"
        size="16"
        onClick={e => copyToClipboard(e)}
      />
      <div onClick={e => heartClick(e)}>
        {valid ? (
          <IoIosHeart className="cursor-pointer" size="19" color="#ff869b" />
        ) : (
          <IoIosHeartEmpty
            className="cursor-pointer"
            size="19"
            color="#ff869b"
          />
        )}
      </div>
    </>
  );
}
