import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

type RouteState = {
  menuList: naviMenu[];
  //   numberData: number;
  //   stringData: string;
};

// export interface headerBtnClickData extends Action {
//   activeMenuId: number;
// }

const initialState: RouteState = {
  menuList: [
    {
      name: '首页',
      id: 0,
      path: '/',
      active: true,
    },
    {
      name: '分类',
      id: 1,
      path: '/category',
      active: false,
    },
    {
      name: '文章',
      id: 2,
      path: '/article',
      active: false,
    },
  ],
  //   numberData: 0,
  //   stringData: '',
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    changeActive(state, action: PayloadAction<number>) {
      const activeMenuId = action.payload;
      state.menuList.forEach((menu: naviMenu) => {
        menu.active = menu.id === activeMenuId ? true : false;
      });
    },
    updateMenuList(state, action: PayloadAction<naviMenu[]>) {
      state.menuList = action.payload;
    },
  },
});

export const selectRouteState = (state: RootState) => state.routeSliceReducer;

export const { changeActive, updateMenuList } = routeSlice.actions;

export default routeSlice.reducer;
