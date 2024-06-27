import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationalID: '',
  createAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, actoin) {
        state.fullName = actoin.payload.fullName;
        state.nationalID = actoin.payload.nationalID;
        state.createAt = actoin.payload.createAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
