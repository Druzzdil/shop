import AddProduct from '../organisms/addProduct/index'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    products: state.productReducer.products,
});

export default connect(
    mapStateToProps,
    null
)(AddProduct)
