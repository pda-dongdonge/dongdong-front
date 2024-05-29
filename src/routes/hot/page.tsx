import BucketNav from "../bucketlist/page";
import { useEffect, useState } from "react";
//import {getBucketList} from "../../apis/bucketlistAPI";
import { Bucket } from "../../store/bucketlist";
import axios from "axios";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "../update/BucketItem";

const { VITE_BASE_URL } = import.meta.env;

export default function HotPage() {
    const [bucketList, setBucketList] = useState<Bucket[]>([]);


    const service = new bucketlistAPI(VITE_BASE_URL + "");
    
    //좋아요 순!!
    useEffect(() => {
        const fetchBucketData = async () => {
          try {
            const data = await service.getHotBucketList();
            setBucketList(data);
          
          } catch (error) {
            console.error("Error fetching bucket data:", error);
          }
        };
      
        fetchBucketData();
      }, []);
      
        const UserClick = (bucket: Bucket) => {
          console.log(bucket);
        };
      
    
  return  (
    <>
    <BucketNav />

    <div className="flex flex-wrap justify-between">
        {bucketList.map((bucket) => (
            <BucketItem key={bucket._id} bucket={bucket} handleClick={UserClick} />
        ))}
    </div>

    
    </>

  );
}
