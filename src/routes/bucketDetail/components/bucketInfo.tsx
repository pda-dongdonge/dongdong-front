// import React from "react";
import PhotoGrid from "./photoGrid";
import InfoBottom from "./infoBottom";
import { IBucketDetail, IBucketItem } from "@/apis/bucketlistAPI";
import dummyProfileImg from "../../../../public/dummy-profile.png";
import { useNavigate } from "react-router-dom";
import { StoreUrlModal } from "@/routes/StoreUrl/StoreUrl";
import { useState } from "react";

interface BucketInfoProps {
  bucketDetail: IBucketDetail;
}

//최대 6개,
// 1개 / 2개 / 3개 / 4개 / 6개
export default function BucketInfo({ bucketDetail }: BucketInfoProps) {
  const [modalShow, setModalShow] = useState(false);
  const photoList = bucketDetail.bucketItemList.map((item: IBucketItem) => {
    return { imgUrl: item.imgUrl, id: item._id };
  });
  // console.log(photoList);
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[500px] shadow-lg h-[433px] rounded-[2rem]">
      <div className="w-full h-[50px] rounded-t-[2rem] bg-cyan-300 relative">
        <img
          src={dummyData.userImage}
          className="w-[48px] h-[48px] rounded-full absolute top-[14px] left-[13px] border-2 border-white"
        />
        <p className="absolute left-[75px] top-[40%] font-semibold">kenny</p>
      </div>
      <div className="px-[1rem] pt-[1.5rem]">
        <p>{dummyData.content}</p>
      </div>
      <div className="px-[1rem]">
        <PhotoGrid imageUrl={dummyData.photoList} />
      </div>
      <div className="px-[1rem] flex flex-row-reverse gap-[10px] translate-y-[68%]">
        <InfoBottom />
      </div>
      <button
      onClick={() => setModalShow(true)}
      >모달!!!!!!!!!!!!!!!!!1</button>
      <StoreUrlModal 
      bucket_id={bucketDetail._id}
      show={modalShow}
      onHide={()=>setModalShow(false)}
      />
    </div>
  );
}
