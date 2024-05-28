import { useEffect, useState } from "react";
import BucketItemImg from "./BucketItemImg";
import SingleImg from "../bucketlistItem/SingleImg";
import TwoImg from "../bucketlistItem/TwoImg";
import MoreImg from "../bucketlistItem/MoreImg";
import axios from "axios";
import bucketlistAPI from "@/apis/bucketlistAPI";

const { VITE_BASE_URL } = import.meta.env;

export default function BucketItem({ bucket, handleClick }) {
    const service = new bucketlistAPI(VITE_BASE_URL + "");

    const [img, setImg] = useState<number | undefined>(undefined);
    const [bucketImg, setBucketImg] = useState<number[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const img = await service.getBucketItemUrl(bucket._id);
                setBucketImg(img);
    
                let imgValue: number = img.length; // 이미지의 수를 imgValue에 저장
                setImg(imgValue);
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };
    
        fetchData();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행
   
    // img 값에 따라 적절한 컴포넌트를 선택하여 렌더링
    let linkComponent;
    if (img === 1) {
        linkComponent = <SingleImg src={bucketImg[0]} />;
    } else if (img === 2) {
        linkComponent = <TwoImg src1={bucketImg[0]} src2={bucketImg[1]} />;
    } else if (img > 2) {
        linkComponent = <MoreImg srcArray={bucketImg} />;
    } 
    

    return (
    <>
    <div className="rounded-2xl border border-indigo-50 p-3 mb-8 w-full max-w-md mx-auto" key={bucket._id} onClick={() => handleClick(bucket)}>
        <div>
        {linkComponent}
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col items-center justify-center w-1/6">
                <img className="w-8 my-1" src="/dongdonglogo.png" alt="Dongdong Logo" />
                <div className="font-bold truncate w-full">
                    user.name
                </div>
            </div>

            <div className="flex flex-col justify-center truncate w-full pl-4">
                <div className="font-semibold text-xl truncate w-full">{bucket.title}</div>
                <div className="font-light text-sm truncate w-full">{bucket.contents}</div>
            </div>
        </div>
    </div>
    </>
    );
}
