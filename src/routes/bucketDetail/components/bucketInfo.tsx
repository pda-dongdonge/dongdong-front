// import React from "react";
import PhotoGrid from "./photoGrid";
import InfoBottom from "./infoBottom";
import { IBucketDetail, IBucketItem } from "@/apis/bucketlistAPI";
import dummyProfileImg from "../../../../public/dummy-profile.png";
import { useNavigate } from "react-router-dom";

interface BucketInfoProps {
  bucketDetail: IBucketDetail;
}

//최대 6개,
// 1개 / 2개 / 3개 / 4개 / 6개
export default function BucketInfo({ bucketDetail }: BucketInfoProps) {
  const photoList = bucketDetail.bucketItemList.map((item: IBucketItem) => {
    return { imgUrl: item.imgUrl, id: item._id };
  });
  // console.log(photoList);
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[500px] shadow-lg min-h-[433px] pb-[1.75rem] rounded-[2rem]">
      <div className="w-full h-[50px] rounded-t-[2rem] bg-purple-400 relative">
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
      <div className="px-[1.2rem] flex flex-row-reverse gap-[13px] translate-y-[68%]">
        <InfoBottom bucketId={bucketDetail._id}/>
      </div>
    </div>
  );
}
