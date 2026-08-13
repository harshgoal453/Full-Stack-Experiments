import { createSlice } from "@reduxjs/toolkit";

const platformSlice = createSlice({
  name: "platforms",

  initialState: {
    list: ["Instagram", "Facebook", "Twitter"],
    selectedPlatform: "Instagram",
  },

  reducers: {
    setPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
  },
});

export const { setPlatform } = platformSlice.actions;

export default platformSlice.reducer;