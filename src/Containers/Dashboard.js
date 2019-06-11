import Dashboard from '../organisms/dashboard/index'
import { connect } from 'react-redux'
import {fetchProducts} from '../Stores/Product/index'
import {proceedCheckoutSuccess} from '../Stores/Product/index'
import {updateFilters} from '../organisms/filters/actions'
import {getProductsSelector} from '../Stores/Selectors/productSelectors'

const mapStateToProps = state => ({
    products: getProductsSelector(state),
    productList: state.productReducer.productList,
    loading: state.productReducer.loading,
    filters: state.filters.items,
    checkoutItems: state.productReducer.products.filter(addedItem => state.productReducer.productList ?
        state.productReducer.productList.find(cartItem => cartItem.id === addedItem.id) : "" )
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: (filters, payload) => dispatch(fetchProducts(payload, filters)),
    updateFilters: (payload) => dispatch(updateFilters(payload)),
    proceedCheckoutSuccess: (payload) => dispatch(proceedCheckoutSuccess(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
