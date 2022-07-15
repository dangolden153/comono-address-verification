import { setNewsComment, setNewsData, setNewsImages } from "./newsSlices";
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useAxios } from "../../../utils/axiosIntance";
import { Dispatch } from "react";
import { AppDispatch } from "../../store";
import axios from 'axios'
// import { useAppDispatch } from "../../hooks";


interface MyData {
  // ...
}
interface newsAttributes {
  id: number
}

interface comment {
  newsId: number,
  name:string,
  avatar: string,
  comment:string

}

export const getNewsData = createAsyncThunk(
  'news/fetchNews',
  async (dispatch:any) => {
    try {
      const { data } = await useAxios.get("news");
      //  console.log("news data", data);

      dispatch(setNewsData(data))
    } catch (error) {
      console.log("error", error);
    }
  }
)

export const getNewsImages = createAsyncThunk<MyData,newsAttributes,{dispatch: AppDispatch}>(
  'news/fetchNewsImages',
    async (datas,thunkApi) => {
      // console.log('getNewsImages id', datas)
      const {id} = datas
    try {
      const { data } = await useAxios.get(`news/${id}/images`);
      //  console.log("news images", data);

       thunkApi.dispatch(setNewsImages(data))
    } catch (error) {
      console.log("error", error);
    }
  }
)

// **********fetch news comment******
export const getNewsComments = createAsyncThunk<MyData,number,{dispatch: AppDispatch}>(
  'news/fetchNewsComments',
    async (id,thunkApi) => {
      console.log('fetchNewscomment id', id)
    // const dispatch = useAppDispatch();
    try {
      const { data } = await useAxios.get(`news/${id}/comments`);
       console.log("news comment", data);

       thunkApi.dispatch(setNewsComment(data))
    } catch (error) {
      console.log("error", error);
    }
  }
)

// **********add news comment******
export const addComment = createAsyncThunk<MyData,comment,{dispatch: AppDispatch}>(
  'news/addComment',
    async (commentData,thunkApi) => {
      console.log('fetchNewscomment id', commentData.newsId)
    // const dispatch = useAppDispatch();
    try {
      const data  = await axios.post(`https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/${commentData.newsId}/comments`,commentData);
       console.log("news comment", data);

      //  thunkApi.dispatch(setNewsComment(data))
    } catch (error) {
      console.log("error", error);
    }
  }
)

// createAsyncThunk(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<void, number, {}>, options?: AsyncThunkOptions<number, {}> | undefined): AsyncThunk<void, number, {}>