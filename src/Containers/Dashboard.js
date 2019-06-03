import Dashboard from '../organisms/dashboard/index'
import { connect } from 'react-redux'
import {fetchProducts} from '../Stores/Product/index'

const mapStateToProps = state => ({
    products: state.productReducer.products,
    filters: state.filters.items
});

// const mapDispatchToProps = dispatch => ({
//     fetchProducts: (payload) => dispatch(fetchProducts()),
//     updateFilters: (payload) => dispatch(updateFilters(payload)),
// });

export default connect(
    mapStateToProps,
    fetchProducts
)(Dashboard)
