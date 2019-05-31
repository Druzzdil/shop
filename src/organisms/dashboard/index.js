import React from 'react';
import { withRouter} from 'react-router-dom';
import Wrapper from './wrapper'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import SizesFilter from '../../Containers/SizeFilters'
import ProductsLength from './productsLength'

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filtered: "" || []
        }
    }
    componentDidMount(){
        this.props.onDidMount()
    }

    callBackFilter = (size) => {
        this.setState({
            filtered: size
        })
    };

    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => {
            if (fruite.value === event.target.value)
                fruite.isChecked =  event.target.checked
        })
        this.setState({fruites: fruites})
    }


    render(){
        const filtered = this.state.filtered.filter(item=>item.isChecked === true);
        const result = filtered.map(item=>item.value)
        const filteredItems = this.props.products.filter(item=>item.payload.size.match(result));
        return (
            <Container style={{ padding: '1rem' }}>
                <Row>
                    <Col sm={2}>
                        <SizesFilter
                            callBackFilter={this.callBackFilter}
                            filteredItems={filteredItems}
                        />
                    </Col>
                    <Col sm={10}>
                        <ProductsLength>
                            {filteredItems.length === 1 ? <dvi>{filteredItems.length} <span>Product Found</span> </dvi> :
                                <dvi>{filteredItems.length} <span>Products Found</span> </dvi>}
                        </ProductsLength>
                        <Wrapper>
                            {filteredItems.map(item =>
                                <Card style={{ width: '15rem', margin: '10px' }}>
                                    <Card.Img variant="top" src="https://picsum.photos/640/360" />
                                    <Card.Body>
                                        <Card.Title>{item.payload.title}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>

                                        <Button variant="primary">{item.payload.price}</Button> &nbsp;
                                        <Button variant="primary">{item.payload.size}</Button>
                                    </Card.Body>
                                </Card>
                            )}
                        </Wrapper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Index)