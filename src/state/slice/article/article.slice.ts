import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../type";

const initialState: Article = {
  topic: '',
  title: '',
  tags: [],
  content: '',
  isPrivate: true,
  isEdit: false,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    updateArticle: (state, action: PayloadAction<Article>) => {
      state.topic = action.payload.topic;
      state.content = action.payload.content;
      state.title = action.payload.title;
      state.tags = action.payload.tags;
      state.isPrivate = action.payload.isPrivate;
      state.isEdit = action.payload.isEdit;
    },
  },
});

export const { updateArticle } = articleSlice.actions;
export default articleSlice.reducer;