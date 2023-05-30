import {createSlice} from '@reduxjs/toolkit';

const downloadSlice = createSlice({
  name: 'download',
  initialState: [],
  reducers: {
    addAllDownloads: (state, action) => {
      state = action.payload;
    },
    addForDownload: (state, action) => {
      state.push(action.payload);
    },
    downloadStart: (state, action) => {
      console.log('action ', action);
      const updatedList = state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state = updatedList;
    },
    downloadCompleted: (state, action) => {
      console.log('action ', action);
      const updatedList = state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state = updatedList;
    },
  },
});

export const {addForDownload, downloadStart, downloadCompleted} =
  downloadSlice.actions;
export default downloadSlice.reducer;
