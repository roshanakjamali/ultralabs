import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export interface DialogState {
  open: boolean;
}

const initialState: DialogState = {
  open: false,
};

export const dialogSlice = createSlice({
  name: "dialogState",
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = dialogSlice.actions;

export const dialogState = (state: RootState) => state.dialog.open;

export default dialogSlice.reducer;
