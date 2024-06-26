/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import SingleImg from "../bucketlistItem/SingleImg";
import TwoImg from "../bucketlistItem/TwoImg";
import MoreImg from "../bucketlistItem/MoreImg";
import bucketlistAPI from "@/apis/bucketlistAPI";
import NoImg from "../bucketlistItem/NoImg";
import InfoBottom from "@/routes/bucketDetail/components/infoBottom";

const { VITE_BASE_URL } = import.meta.env;

export default function BucketItem({
  bucket,
  handleClick,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bucket: any;
  handleClick: any;
}) {
  const service = new bucketlistAPI(VITE_BASE_URL + "");

  const [img, setImg] = useState<number | undefined>(undefined);
  const [bucketImg, setBucketImg] = useState<number[]>([]);
  //const [bucket_id, setBucket_id]=useState<number | undefined>(bucket_id);
  console.log(bucket._id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const img = await service.getBucketItemUrl(bucket._id);
        setBucketImg(img);

        const imgValue: number = img.length; // 이미지의 수를 imgValue에 저장
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
  } else if (img && img > 2) {
    linkComponent = <MoreImg srcArray={bucketImg} />;
  } else {
    linkComponent = <NoImg />;
  }

  return (
    <>
      <div className="rounded-2xl border border-indigo-50 p-3 mb-8 w-full max-w-md cursor-pointer">
        <div key={bucket._id} onClick={() => handleClick(bucket)}>
          {linkComponent}
        </div>
        <div className="flex flex-row mt-2">
          <div
            className="flex flex-col items-center justify-center w-1/6"
            key={bucket._id}
            onClick={() => handleClick(bucket)}
          >
            <img
              className="rounded-full w-8 my-1"
              src="/dummy-profile.png"
              alt="Dongdong"
            />
            <div className="font-bold truncate w-full text-center">
              {bucket.maker.username ? bucket.maker.username : "동동이"}
            </div>
          </div>

          <div className="flex flex-col justify-center truncate w-full pl-4">
            <div
              className="font-semibold text-xl truncate w-full"
              key={bucket._id}
              onClick={() => handleClick(bucket)}
            >
              {bucket.title}
            </div>
            <div
              className="font-light text-sm truncate w-full"
              key={bucket._id}
              onClick={() => handleClick(bucket)}
            >
              {bucket.contents}
            </div>
            <div className="flex flex-row justify-end font-light text-xs truncate w-full items-center">
              <div className="flex flex-row justify-center gap-2">
                <InfoBottom bucketId={bucket._id} />{" "}
              </div>
              &nbsp;{bucket.__v}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*/>

 <div className="flex flex-row">
            <InfoBottom bucketId={bucket._id}  />
            {bucket.__v}
        </div>
*/
