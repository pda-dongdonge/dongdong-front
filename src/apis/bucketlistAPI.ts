import axios from "axios";
import { Bucket } from "../store/bucketlist";
import { BaseApi } from "./baseAPI";

export default class bucketlistAPI extends BaseApi {
    async getBucketList(){
        const resp = await this.fetcher.get('/');
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


      async getUserLikeBucketList(userId: string){
        const resp = await this.fetcher.get(`/userprofile/likebucket/${userId}`);
        return resp.data;
      }
      async getUserBuckets(){
        const resp = await this.fetcher.get('/user');
        return resp.data; 
      }

      async deleteBucket(bucketId:string ){
        const resp=await this.fetcher.delete(`/${bucketId}`);
        console.log(resp);
      }
      async postUrl(url: string, urlContent: string, bucketId: string): Promise<any> {
        try {
          const resp = await this.fetcher.post(`/url/${bucketId}`, {
            url: url, 
            urlTitle: "",
            urlContent: urlContent,
            imgUrl: ""
          });
          console.log(resp.data);
          return resp.data;
        } catch (error) {
          console.error("Error posting URL:", error);
          // 서버가 응답한 에러 메시지를 반환
          if (error.response && error.response.data && error.response.data.message) {
              return { success: false, message: error.response.data.message };
          } else {
              return { success: false, message: "요청 중 오류가 발생했습니다." };
          }
        }
      }

      async saveBucketItem(bucketId:string, bucketItemId:string){
        const resp=await this.fetcher.get(`/${bucketId}/${bucketItemId}`);
        console.log("data", resp.data);
      }
}

/*
async getBucketList(): Promise<Bucket[]> {
        const resp = await this.fetcher.get('/bucket');
        return resp.data;
      }
      */