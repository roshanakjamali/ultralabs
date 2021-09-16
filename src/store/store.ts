import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dialogReducer from "../features/experts/add/add.dialogSlice";

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
