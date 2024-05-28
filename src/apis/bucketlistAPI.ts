import axios from "axios";
import { Bucket } from "../store/bucketlist";
import { BaseApi } from "./baseAPI";

export default class bucketlistAPI extends BaseApi {
    async getBucketList(){
        const resp = await this.fetcher.get('/bucket');
        return resp.data;
    }

    async postBucket(title:string, contents:string){
      const resp=await this.fetcher.post('/',{
        title:title,
        contents:contents
      })
      return resp.data;
    }

      async getBucketItemUrl(bucketId: number){
        const resp = await this.fetcher.get(`/bucket/${bucketId}`);
        return resp.data;
      }

      async getHotBucketList(){
        const resp = await this.fetcher.get('/hotbucket');
        return resp.data;
      }
}

/*
async getBucketList(): Promise<Bucket[]> {
        const resp = await this.fetcher.get('/bucket');
        return resp.data;
      }
      */