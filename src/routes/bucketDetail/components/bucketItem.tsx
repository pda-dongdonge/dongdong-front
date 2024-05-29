import { IBucketItem } from "@/apis/bucketlistAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type BucketItemProps = {
  bucketItem: IBucketItem;
};

// utils/cookies.js
export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default function BucketItem({ bucketItem }: BucketItemProps) {

  const navigate = useNavigate();
  const plusButtonClick = ():void => {
    const token = getCookie('AUTH-TOKEN');
    console.log(token);
    if(token) {
      //로그인 한 경우 -> state와 함께 storeItem으로 이동하기
      navigate("/storeItem", {
        state: {
          bucketItemId: bucketItem._id
        }
      })
    }
      else {
        alert('로그인이 필요한 서비스입니다!')
      }
  }

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

        {/* <Link 
        onClick={()=>console.log('되나?')}
        to="/storeItem" 
        state={{bucketItemId: bucketItem._id}}> */}
          <button 
          onClick={()=>plusButtonClick()}
          className="absolute right-[5%] bottom-[40px] bg-purple-200 h-[35px] w-[35px] rounded-full cursor-pointer text-slate-500 hover:opacity-100 opacity-75">
            +
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
