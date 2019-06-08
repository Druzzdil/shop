import AddProductForm from '../organisms/addProductForm/index'
import { connect } from 'react-redux'
import {fetchProducts, addProduct} from '../Stores/Product/index'

const mapStateToProps = state => ({
    products: state.productReducer.products,
});

const mapDispatchToProps = dispatch => ({
    addProduct: (payload) => dispatch(addProduct(payload)),
    fetchProducts: (filters, payload) => dispatch(fetchProducts(payload, filters)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductForm)
