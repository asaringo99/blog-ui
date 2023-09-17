import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Topic } from "../../type";

const initialState: Topic = {
  title: '',
  releaseDate: '',
  updatedDate: '',
  url: '',
  isPrivate: true,
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    updateTopic: (state, action: PayloadAction<Topic>) => {
      state.title = action.payload.title;
    },
  },
});

export const { updateTopic } = topicSlice.actions;
export default topicSlice.reducer;