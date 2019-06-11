import PersistentDrawerLeft from '../organisms/sidebar/index'
import { connect } from 'react-redux'
import {getCheckoutProductsSum} from '../Stores/Selectors/productSelectors'

const mapStateToProps = state => ({
    products: state.productReducer.products,
    productList: state.productReducer.productList,
    sum: getCheckoutProductsSum(state),
    checkoutItems: state.productReducer.products.filter(addedItem => state.productReducer.productList ?
        state.productReducer.productList.find(cartItem => cartItem === addedItem.id) : "" )
});

export default connect(
    mapStateToProps,
    null
)(PersistentDrawerLeft)
