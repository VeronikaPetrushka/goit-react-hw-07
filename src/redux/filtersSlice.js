import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;

export const { setNameFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filtersReducer;
