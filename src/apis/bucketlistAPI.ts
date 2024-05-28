// import axios from "axios";
// import { Bucket } from "../store/bucketlist";
import { BaseApi } from "./baseAPI";

export interface IBucketItem {
  _id: string;
  imgUrl: string;
  urlTitle: string;
  urlContent: string;
  url: string;
}

export interface IBucketDetail {
  _id : string;
  title: string;
  likeUser: number;
  contents: string;
  bucketItemList: IBucketItem[];
}

export default class bucketlistAPI extends BaseApi {
    async getBucketList(){
        const resp = await this.fetcher.get('/bucket');
        return resp.data;
      }

      async getBucketItemUrl(bucketId: number){
        const resp = await this.fetcher.get(`/bucket/${bucketId}`);
        return resp.data;
      }

      async getBucketDetail(bucketId: string) {
        const resp = await this.fetcher.get(`/${bucketId}`);
        return resp.data;
      }
}

/*
async getBucketList(): Promise<Bucket[]> {
        const resp = await this.fetcher.get('/bucket');
        return resp.data;
      }
      */