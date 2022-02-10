import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "pagination",
  initialState: { value: { filter: [], page: 1 } },
  reducers: {
    actionFilter: (state, action) => {
      const finalFilter = [];
      let addId = true;
      for (const filterId of state.value.filter) {
        if (filterId === action.payload.id) {
          addId = false;
        } else {
          finalFilter.push(filterId);
        }
      }
      if (addId) finalFilter.push(action.payload.id);
      state.value.filter = finalFilter;
      state.value.page = 1;
      console.log(state.value.filter);
    },
    actionPage: (state, action) => {
      state.value.page = action.payload.page;
    },
  },
});

export const { actionFilter, actionPage } = filterSlice.actions;

export default filterSlice.reducer;
