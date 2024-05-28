import { IBucketItem } from "@/apis/bucketlistAPI";

type BucketItemProps = {
  bucketItem: IBucketItem;
};

export default function BucketItem({ bucketItem }: BucketItemProps) {
  return (
    <div className="grid grid-cols-7 gap-x-3">
      <div className="flex flex-col items-center">
        <div
          className="w-[48px] h-[48px] rounded-full bg-cover bg-center p-[1rem]"
          style={{ backgroundImage: `url(${bucketItem.imgUrl})` }}
        ></div>
        <div className="w-[1px] h-full bg-slate-300 relative">
          <div className="w-[3px] h-[3px] bg-slate-300 rounded-full absolute bottom-0 right-[-1px]"></div>
        </div>
      </div>
      <div className="flex flex-col col-[2/8] relative">
        <p
          onClick={() => window.open(bucketItem.url)}
          className="text-slate-500 text-sm cursor-pointer"
        >
          {bucketItem.urlTitle} <b>&gt;</b>
        </p>
        <img
          onClick={() => window.open(bucketItem.url)}
          className="mb-[1.5rem] rounded-[20px] cursor-pointer"
          src={bucketItem.imgUrl}
        />
        <button className="absolute right-[5%] bottom-[40px] bg-cyan-100 h-[35px] w-[35px] rounded-full opacity-75 cursor-pointer text-slate-500">
          +
        </button>
      </div>
    </div>
  );
}
