import React, { useEffect } from "react";

type Props = {
  tab: string;
};
export default function BucketListComponent({ tab }: Props) {
  useEffect(() => {
    console.log("tab:", tab);
  }, []);
  return <div className="user-bucketList"></div>;
}
