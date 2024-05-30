import { IBucketItem } from "@/apis/bucketlistAPI";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import authAPI from "@/apis/authAPI";
import { useState } from "react";

type BucketItemProps = {
  bucketItem: IBucketItem;
};

const { VITE_BASE_URL } = import.meta.env;

export default function BucketItem({ bucketItem }: BucketItemProps) {
  const navigate = useNavigate();
  const [hide, setHide] = useState<boolean>(true);

  const plusButtonClick = async (): Promise<void> => {
    const service = new authAPI(VITE_BASE_URL + "auth");

    const res = await service.isLogin();
    console.log(res);

    if (res._id) {
      //로그인 한 경우 -> state와 함께 storeItem으로 이동하기
      navigate("/storeItem", {
        state: {
          bucketItemId: bucketItem._id,
        },
      });
    } else {
      alert("로그인이 필요한 서비스입니다!");
    }
  };

  return (
    <div className="grid grid-cols-7 gap-x-3">
      <div className="flex flex-col items-center">
        <div
          className="w-[48px] h-[48px] rounded-full bg-cover bg-center p-[1rem]"
          style={{ backgroundImage: `url(${bucketItem.imgUrl})` }}
        ></div>
        <div className="w-[1px] h-full bg-slate-300 relative">
          <div className="w-[3px] h-[3px] bg-slate-300 rounded-full absolute bottom-0 right-[-1px]"></div>
        </div>
      </div>
      <div className="flex flex-col col-[2/8] relative">
        <p
          onClick={() => window.open(bucketItem.url)}
          className="text-slate-500 text-sm cursor-pointer"
        >
          {bucketItem.urlTitle} <b>&gt;</b>
        </p>
        <div className="relative mb-[1.5rem] rounded-[20px] flex justify-center">
          <img
            onClick={() => window.open(bucketItem.url)}
            className="rounded-[20px] cursor-pointer"
            src={bucketItem.imgUrl}
          />
          <div
          onMouseOver={()=>setHide(false)}
          onMouseOut={()=>setHide(true)} 
          className={`absolute top-[0] rounded-[20px] w-full h-full bg-[#00000066] px-[1rem] ${hide ? "opacity-0" : "opacity-100"} flex items-center justify-center`}
          >
            <p className="text-white">{bucketItem.urlContent}</p>
          </div>
        </div>
        <button
          onClick={() => plusButtonClick()}
          className="absolute right-[5%] bottom-[40px] bg-purple-300 h-[35px] w-[35px] rounded-full cursor-pointer text-slate-500 hover:opacity-100 opacity-75"
        >
          +
        </button>
      </div>
    </div>
  );
}
