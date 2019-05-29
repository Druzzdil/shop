import Dashboard from '../organisms/dashboard/index'
import { connect } from 'react-redux'
import {fetchProduct} from '../Stores/Product/index'

const mapStateToProps = state => ({
    products: state.productReducer.products,
});

const mapDispatchToProps = dispatch => ({
    onDidMount: (payload) => dispatch(fetchProduct(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
