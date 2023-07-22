import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

type BannerState = {
  imgUrl: string;
  article?: Article;
};

type homePageState = {
  banner: BannerState;
  features: Article[];
};

const initialState: homePageState = {
  banner: {
    imgUrl: '',
    article: undefined,
  },
  features: [],
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    // clickHeaderBtn(state, action: PayloadAction<number>) {
    //   const activeMenuId = action.payload;
    //   state.menuList.forEach((menu: naviMenu) => {
    //     menu.active = menu.id === activeMenuId ? true : false;
    //   });
    // },
    // updateMenuList(state, action: PayloadAction<naviMenu[]>) {
    //   state.menuList = action.payload;
    // },
  },
});

export const selectHomePageState = (state: RootState) => state.homePageSliceReducer

export const { } = homePageSlice.actions;

export default homePageSlice.reducer;