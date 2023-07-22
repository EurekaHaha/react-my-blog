import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

type totalSettingState = {
    loading: boolean
}

const initialState: totalSettingState = {
    loading: false
}

const totalSettingSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        changeLoading(state, action: PayloadAction<boolean>) {
            const isLoading = action.payload;
            state.loading = isLoading;
        }
    //   changeActive(state, action: PayloadAction<number>) {
    //     const activeMenuId = action.payload;
    //     state.menuList.forEach((menu: naviMenu) => {
    //       menu.active = menu.id === activeMenuId ? true : false;
    //     });
    //   },
    },
  });
  
  export const totalSettingState = (state: RootState) => state.totalSettingReducer;
  
  export const { changeLoading } = totalSettingSlice.actions;
  
  export default totalSettingSlice.reducer;