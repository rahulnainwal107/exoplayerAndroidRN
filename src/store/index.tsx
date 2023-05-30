import {configureStore} from '@reduxjs/toolkit';

import downloadSlice from './reducers/index';

const store = configureStore({
  reducer: {
    download: downloadSlice,
  },
});

export default store;
