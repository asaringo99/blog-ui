import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Articles } from "../../type";

const initialState: Articles = {
  contents: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    updateArticles: (state, action: PayloadAction<Articles>) => {
      state.contents = action.payload.contents;
      console.log({...state.contents}, {...action.payload})
    },
  },
});

export const { updateArticles } = articlesSlice.actions;
export default articlesSlice.reducer;