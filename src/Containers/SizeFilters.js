import SizeFilters from '../organisms/dashboard/sizeFilters'
import { connect } from 'react-redux'
import {fetchProducts} from '../Stores/Product/index'

const mapStateToProps = state => ({
    products: state.productReducer.products,
});

export default connect(
    mapStateToProps,
    {fetchProducts}
)(SizeFilters)
