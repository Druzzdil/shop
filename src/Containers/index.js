import Main from '../organisms/main/main'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.user.users,
        payload: state.user.payload,
        userPayload: state.user.userPayload
    };
};

const mapDispatchToProps = dispatch => ({
    product: () => console.log('test')
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
