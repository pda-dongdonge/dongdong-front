import BucketNav from "../bucketlist/page";
import { useEffect, useState } from "react";
//import {getBucketList} from "../../apis/bucketlistAPI";
import { Bucket } from "../../store/bucketlist";
import axios from "axios";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "../update/BucketItem";
import { useAuth } from "@/hooks/useAuth";

const { VITE_BASE_URL } = import.meta.env;

export default function LikePage() {
    const [bucketList, setBucketList] = useState<Bucket[]>([]);
    const { user_id, login, logOut } = useAuth();

    const service = new bucketlistAPI(VITE_BASE_URL + "");
    
    //내가 좋아요 한 것
    useEffect(() => {
        if (user_id) {
            const fetchBucketData = async () => {
                try {
                    const data = await service.getUserLikeBucketList(user_id);
                    setBucketList(data);
                } catch (error) {
                    console.error("Error fetching bucket data:", error);
                }
            };

            fetchBucketData();
        }
    }, [user_id]);
      
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
