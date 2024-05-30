/* eslint-disable @typescript-eslint/no-explicit-any */
import BucketNav from "../bucketlist/page";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "../update/BucketItem";
import { useNavigate } from "react-router-dom";
import { Bucket } from "../user/BucketItem";
import useSWR from "swr";
import SkeletonContainer from "@/components/SkeletonContainer";
const { VITE_BASE_URL } = import.meta.env;

export default function HotPage() {
  // const [bucketList, setBucketList] = useState<Bucket[]>([]);
  const navigate = useNavigate();

  const service = new bucketlistAPI(VITE_BASE_URL + "");
  const { data, isLoading } = useSWR<any>(
    `/hotbucket`,
    service.fetcher.bind(service)
  );

  const UserClick = (bucket: Bucket) => {
    // console.log(bucket);
    navigate(`/bucketlist/${bucket._id}`);
  };
  if (isLoading)
    return (
      <>
        <BucketNav />
        <SkeletonContainer cnt={3} />;
      </>
    );
  return (
    <>
      <BucketNav />
      <div className="flex flex-wrap justify-center gap-8 max-w-[1440px] mx-auto">
        {data.data.map((bucket: any) => (
          <BucketItem
            key={bucket._id}
            bucket={bucket}
            handleClick={UserClick}
          />
        ))}
      </div>
    </>
  );
}
