import {combineReducers} from 'redux';
import { productReducer,selectedProductReducer,cartProductsReducer } from './productReducer';

const reducers = combineReducers({

    allProducts:productReducer,
    product:selectedProductReducer,
    cartProducts:cartProductsReducer,
});

export default reducers;