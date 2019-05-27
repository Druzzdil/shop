import Main from '../organisms/main/main'
import { connect } from 'react-redux'
import {fetchProduct, addProduct} from '../Stores/Product/index'

const mapStateToProps = state => ({
    products: state.productReducer.products,
});

const mapDispatchToProps = dispatch => ({
    onDidMount: () => dispatch(fetchProduct()),
    addProduct: (payload) => dispatch(addProduct(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
