// import React from "react";
import PhotoGrid from "./photoGrid";
import InfoBottom from "./infoBottom";
import { IBucketDetail, IBucketItem } from "@/apis/bucketlistAPI";
import dummyProfileImg from "../../../../public/dummy-profile.png";
import { useNavigate } from "react-router-dom";
import { StoreUrlModal } from "@/routes/StoreUrl/StoreUrl";
import { useEffect, useState } from "react";
import authAPI from "@/apis/authAPI";

interface BucketInfoProps {
  bucketDetail: IBucketDetail;
}

const { VITE_BASE_URL } = import.meta.env;

//최대 6개,
// 1개 / 2개 / 3개 / 4개 / 6개
export default function BucketInfo({ bucketDetail }: BucketInfoProps) {
  const [modalShow, setModalShow] = useState(false);
  const [addBtnValid, setAddBtnValid] = useState(false);
  const photoList = bucketDetail.bucketItemList.map((item: IBucketItem) => {
    return { imgUrl: item.imgUrl, id: item._id };
  });
  // console.log(photoList);
  const navigate = useNavigate();

  // 버킷의 주인만 양동이 채우기 버튼이 보이도록 수정
  useEffect(() => {
    const check = async (): Promise<void> => {
      const service = new authAPI(VITE_BASE_URL + "auth");
      const res = await service.isLogin();

      if (res._id === bucketDetail.maker._id) {
        setAddBtnValid(true);
      }
    };
    check();
  }, []);

  return (
    <div className="w-full max-w-[500px] shadow-lg min-h-[433px] pb-[1.75rem] rounded-[2rem] relative">
      <div className="w-full h-[50px] rounded-t-[2rem] relative bg-gradient-to-r from-[#b18dff] to-[#868aff]">
        <img
          src={dummyProfileImg}
          onClick={() => navigate(`/user/${bucketDetail.maker._id}`)}
          className="w-[48px] h-[48px] rounded-full absolute top-[14px] left-[13px] border-2 border-white cursor-pointer"
        />
        <p
          onClick={() => navigate(`/user/${bucketDetail.maker._id}`)}
          className="absolute left-[75px] top-[40%] font-semibold cursor-pointer"
        >
          {bucketDetail.maker.username}
        </p>
      </div>
      <div className="px-[1rem] pt-[1.5rem]">
        <p className="m-0">{bucketDetail.title}</p>
        <p className="text-slate-500 text-sm">{bucketDetail.contents}</p>
      </div>
      <div className="px-[1rem]">
        <PhotoGrid imageList={photoList} />
      </div>
      <div className="px-[1.2rem] flex items-center justify-end gap-[13px] translate-y-[68%]">
        <InfoBottom bucketId={bucketDetail._id} />
      </div>
      {addBtnValid && (
        <button
          className="bg-purple-200 p-[8px] rounded-[10px] text-slate-700 text-xs absolute cursor-pointer top-[13%] right-[2%]"
          onClick={() => setModalShow(true)}
        >
          양동이 채우기
        </button>
      )}
      <StoreUrlModal
        bucket_id={bucketDetail._id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
