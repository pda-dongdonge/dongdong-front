// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBucketDetail } from "@/apis/bucketlistAPI";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import BucketInfo from "./components/bucketInfo";
import bucketlistAPI from "@/apis/bucketlistAPI";
import BucketItemList from "./components/bucketItemList";

export default function BucketDetailPage() {
    const {VITE_BASE_URL} = import.meta.env;
    const service = new bucketlistAPI(VITE_BASE_URL + "bucket/detail")
    const {bucketId} = useParams() as {bucketId : string};
    const [bucketDetail, setBucketDetail] = useState<IBucketDetail|null>(null);

    useEffect(()=>{
        const fetchBucketDetailData = async () => {
            try {
                const bucketDetail = await service.getBucketDetail(bucketId);
                console.log(bucketDetail);
                setBucketDetail(bucketDetail);
                // return bucketDetail;
            } catch (error) {
                console.error("cannot get detail : ", error);
            }
        };
        fetchBucketDetailData();
    }, []);

  return (
    <>
      <MyNavbar />
      <div className="flex flex-col items-center gap-4">
        {bucketDetail && 
        <>
        <BucketInfo bucketDetail={bucketDetail}/>
        <BucketItemList bucketItemList={bucketDetail.bucketItemList}/>
        </>
    }
      </div>
    </>
  );
}
