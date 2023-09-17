import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dashboard } from "../../type";

const initialState: Dashboard = {
  topics: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateDashboard: (state, action: PayloadAction<Dashboard>) => {
      state.topics = action.payload.topics;
    },
  },
});

export const { updateDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;