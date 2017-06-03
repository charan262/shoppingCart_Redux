/**
 * Created by charan reddy on 5/31/2017.
 */
import {combineReducers} from 'redux';
import itemslist from './items_list';
import activeItemsList from './display';
import addToCart from './addToCart'
const allReducers=combineReducers({
    items:itemslist,
    activeItem:activeItemsList,
    currentItem:addToCart
})
export default allReducers;