import AddProductForm from '../organisms/addProductForm/index'
import { connect } from 'react-redux'
import {fetchProducts, addProduct} from '../Stores/Product/index'

const mapStateToProps = state => ({
    products: state.productReducer.products,
});

const mapDispatchToProps = dispatch => ({
    // onDidMount: (payload) => dispatch(fetchProducts(payload)),
    // addProduct: (payload) => dispatch(addProduct(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductForm)
