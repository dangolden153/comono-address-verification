import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsData: [],
  newsImages: [],
  newsComments: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      state.newsData = action.payload;
    },

    setNewsImages: (state, action) => {
      state.newsImages = action.payload;
    },

    setNewsComment: (state, action) => {
      state.newsComments = action.payload;
    },
  }

});


// distructing action-creator and action-type
export const { setNewsData, setNewsImages, setNewsComment } = newsSlice.actions;


// getting the slice selectors
export const selectNewsData = (state: any) => state.news.newsData
export const selectNewsImages = (state: any) => state.news.newsImages
export const selectNewsComment = (state: any) => state.news.newsComments


export default newsSlice.reducer


