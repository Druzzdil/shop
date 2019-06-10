import PersistentDrawerLeft from '../organisms/sidebar/index'
import { connect } from 'react-redux'
import {fetchProducts} from '../Stores/Product/index'
import {proceedCheckoutSuccess} from '../Stores/Product/index'
import {updateFilters} from '../organisms/filters/actions'

const mapStateToProps = state => ({
    products: state.productReducer.products,
    productList: state.productReducer.productList,
    loading: state.productReducer.loading,
    checkoutItems :state.productReducer.products.filter(addedItem => state.productReducer.productList ?
        state.productReducer.productList.find(cartItem => cartItem === addedItem.id) : "" )
});

export default connect(
    mapStateToProps,
    null
)(PersistentDrawerLeft)
