import Dashboard from '../organisms/dashboard/index'
import { connect } from 'react-redux'
import {fetchProducts} from '../Stores/Product/index'
import {updateFilters} from '../organisms/filters/actions'

const mapStateToProps = state => ({
    products: state.productReducer.products,
    filters: state.filters.items
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: (filters, payload) => dispatch(fetchProducts(payload, filters)),
    updateFilters: (payload) => dispatch(updateFilters(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
