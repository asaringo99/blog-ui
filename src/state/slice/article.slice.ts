import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
  title: string
  content: string
};

const initialState: Article = {
  title: "",
  content: "",
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Article>) => {
      state.content = action.payload.content
      state.title = action.payload.title
    },
  },
});

export const { update } = articleSlice.actions;