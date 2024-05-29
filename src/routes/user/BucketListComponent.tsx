import React, { useEffect } from "react";
import BucketItem from "./BucketItem";
type Props = {
  tab: string;
};
export default function BucketListComponent({ tab }: Props) {
  const dummyBucket = [
    {
      _id: "asdf4242",
      title: "여름여름한 영화",
      content: "예아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl:
            "https://image.laftel.net/items/thumbs/big/dc85cd2e-2b58-4731-8a4b-509fb91fcef7.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl:
            "https://tvstore-phinf.pstatic.net/20240506_185/1714978959261KYVFL_JPEG/GodzillaXKong_NewEmpire_V_DD_KA_TT_2000x3000_300dpi_KR.jpg?type=w320_r145",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 6,
      likeUser: ["13", "fsad", "fsdfwds", "fsdfw"],
    },
    {
      _id: "asdf423245242",
      title: "무한도전 모음",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 13,
      likeUser: ["13", "fsad", "fsdfwds", "fsdfw"],
    },
    {
      _id: "a42fasdg242",
      title: "로맨스 탑10",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 10,
      likeUser: [],
    },
    {
      _id: "a42fasdg242",
      title: "먹방리스트",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 10,
      likeUser: [],
    },
    {
      _id: "a4241fasdg242",
      title: "드라마 탑10",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 10,
      likeUser: [],
    },
    {
      _id: "afw42fasdg242",
      title: "동물동물",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 10,
      likeUser: [],
    },
    {
      _id: "f2fsda42fasdg242",
      title: "고양이 영상",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 10,
      likeUser: [],
    },
  ];
  useEffect(() => {
    console.log("tab:", tab);
  }, []);
  return (
    <div className="user-bucketList w-full  min-h-full  py-2 px-4">
      <div>
        <p className="text-dark-500 m-2 mb-3">{`${6}개의 바구니`}</p>
      </div>
      <div className="bucket grid grid-cols-2 gap-4">
        {dummyBucket &&
          dummyBucket.map((bucket) => {
            return <BucketItem key={bucket._id} bucket={bucket}></BucketItem>;
          })}
      </div>
    </div>
  );
}
