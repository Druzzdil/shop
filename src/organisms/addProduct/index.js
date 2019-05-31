import React from 'react';
import ComponentWrapper from './componentWrapper'
import AddProductContainer from './addProductContainer'
import AddProductForm from '../../Containers/AddProductForm'
import { withRouter} from 'react-router-dom';

class AddProduct extends React.Component {
    render(){
        return(
            <ComponentWrapper>
                <AddProductContainer>
                    <AddProductForm/>
                </AddProductContainer>
            </ComponentWrapper>
        )
    }
}

export default withRouter(AddProduct);