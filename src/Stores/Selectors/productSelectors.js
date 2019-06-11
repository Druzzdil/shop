import {createSelector} from "reselect";

const getProducts = (state) => state.productReducer.products;
const getCheckoutItems = (state) => state.productReducer.productList;

const getProductsSelector = createSelector(
    getProducts,
    items => items.map(item=>item)
);

const getCheckoutProductsSum = createSelector(
    getCheckoutItems,
    items => items.reduce((prevValue, nextValue) => {
        console.log(prevValue, nextValue, 'reduce');
        return prevValue + nextValue}
        ,0)
);

const getProductsPriceSelector = createSelector(
    getProducts,
    items => items.map(item=>item.price)
);

export {
    getProductsSelector,
    getCheckoutProductsSum
};
