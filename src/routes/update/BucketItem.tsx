import { useEffect, useState } from "react";
import {SingleImage, TwoImages, MultipleImages } from "./BucketItemList";
import BucketItemImg from "./BucketItemImg";
import SingleImg from "./SingleImg";
import TwoImg from "./TwoImg";
import MoreImg from "./MoreImg";

export default function BucketItem({ bucket, handleClick }) {
    const [img, setImg] = useState<number | undefined>(undefined);
    const images: string[] = [
        "https://i.ytimg.com/vi/77gZ0ECks0A/hq720.jpg",
      // "https://i.ytimg.com/vi/qwmSWtkAIQo/hq720.jpg",
       //"https://i.ytimg.com/vi/77gZ0ECks0A/hq720.jpg",
        // 추가 이미지 URL들...
    ];
    useEffect(() => {
        let imgValue: number = 0;
        if (images.length === 1) {
            imgValue = 1;
        } else if (images.length === 2) {
            imgValue = 2;
        } else {
            imgValue = 3;
        }
        setImg(imgValue);
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    let linkComponent;
    if (img === 1) {
        linkComponent = <SingleImg src= {images[0]} />;
    } else if (img === 2) {
        linkComponent = <TwoImg src1={images[0]} src2={images[1]} />;
    } else if (img && img > 2) {
        linkComponent = <MoreImg srcArray={images} />;
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
