import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState: {
    data: [],
    productDetail: {},
    loading: false,
    error: false,
  },
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    getData: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getProductDetail: (state, action) => {
      state.loading = false;
      state.productDetail = action.payload;
    },
    getError: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    getDefaultInitialState: (state) => {
      state.loading = false;
      state.error = false;
      state.data = [];
      state.productDetail = {};
    },
  },
});

const { fetchData, getData, getError, getProductDetail } =
  shopItemsSlice.actions;
export const { getDefaultInitialState } = shopItemsSlice.actions;

export const fetchShopItems = () => async (dispatch) => {
  dispatch(fetchData());
  axios
    .get(API_URL)
    .then((res) => {
      dispatch(getData(res.data));
    })
    .catch((err) => {
      dispatch(getError(err));
    });
};
export const fetchShopItemsDetail = (id) => async (dispatch) => {
  dispatch(fetchData());
  axios
    .get(`${API_URL}/${id}`)
    .then((res) => {
      dispatch(getProductDetail(res.data));
    })
    .catch((err) => {
      dispatch(getError(err));
    });
};

export default shopItemsSlice.reducer;
