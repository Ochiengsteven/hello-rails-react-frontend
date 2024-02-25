import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { greeting: '' },
  status: 'idle',
};

const baseUrl = 'http://localhost:3000/greetings/random';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        console.log('Fulfilled action payload:', action.payload);
        state.status = 'done';
        state.value = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : 'Unknown error';
      });
  },
});

export default greetingSlice.reducer;