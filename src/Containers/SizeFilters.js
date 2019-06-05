import SizeFilters from '../organisms/dashboard/sizeFilters'
import { connect } from 'react-redux'
import {fetchProducts} from '../Stores/Product/index'

const mapStateToProps = state => ({
    products: state.productReducer.products,
});

const mapDispatchToProps = dispatch => ({
    // onDidMount: (payload) => dispatch(fetchProducts(payload)),
    // addProduct: (payload) => dispatch(addProduct(payload)),
    // fetchProducts: (payload) => dispatch(fetchProducts(payload))
});

export default connect(
    mapStateToProps,
    {fetchProducts}
)(SizeFilters)
