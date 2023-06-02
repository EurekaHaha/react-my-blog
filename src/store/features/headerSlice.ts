import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

type headerState = {
  menuList: naviMenu[];
  numberData: number;
  stringData: string;
};

export interface headerBtnClickData extends Action {
  activeMenuId: number;
}

const initialState: headerState = {
  menuList: [
    {
        name: '首页',
        id: 0,
        path: '/',
        active: true
    },
    {
        name: '分类',
        id: 1,
        path: '/category',
        active: false
    },
    {
        name: '文章',
        id: 2,
        path: '/article',
        active: false
    }
  ],
  numberData: 0,
  stringData: '',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    clickHeaderBtn(state, action: PayloadAction<number>) {
      const activeMenuId = action.payload;
      state.menuList.forEach((menu: naviMenu) => {
        menu.active = menu.id === activeMenuId ? true : false;
      });
    },
    updateMenuList(state, action: PayloadAction<naviMenu[]>) {
        state.menuList = action.payload;
    }
  },
});

export const selectHeaderState = (state: RootState) => state.headerSliceReducer

export const { clickHeaderBtn, updateMenuList } = headerSlice.actions;

export default headerSlice.reducer;
