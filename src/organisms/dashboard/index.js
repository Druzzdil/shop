import React from 'react';
import { withRouter} from 'react-router-dom';
import Wrapper from './wrapper'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import SizesFilter from '../../Containers/SizeFilters'
import PropTypes from 'prop-types';

class Dashboard extends React.Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        filters: PropTypes.array,
        sort: PropTypes.string
    };

    state = {
        isLoading: false
    };

    constructor(props){
        super(props);
        this.state = {
            filtered: "" || []
        }
    }
    componentDidMount() {
        // this.handleFetchProducts();
        this.props.fetchProducts()
    }

    componentWillReceiveProps(nextProps) {
        const { filters: nextFilters } = nextProps;
        if (nextFilters !== this.props.filters) {
            this.handleFetchProducts(nextFilters, undefined);
        }
    }

    handleFetchProducts = () => {
        const {filters} = this.props;
        this.props.fetchProducts(filters)
    };

    callBackFilter = (size) => {
        this.setState({
            filtered: size
        })
    };

    render(){
        console.log(this.props, 'chono');
        const filteredItems = this.props.products.filter(item=>item.title);
        return (
            <Container style={{ padding: '1rem' }}>
                <Row>
                    <Col sm={2}>
                        <SizesFilter
                            updateFilters={this.props.updateFilters}
                            callBackFilter={this.callBackFilter}
                            filteredItems={filteredItems}
                        />
                    </Col>
                    <Col sm={10}>
                        <div>
                            {filteredItems.length === 1 ? <dvi>{filteredItems.length} <span>Product Found</span> </dvi> :
                                <dvi>{filteredItems.length} <span>Products Found</span> </dvi>}
                        </div>
                        <Wrapper>
                            {filteredItems.map(item =>
                                <Card style={{ width: '15rem', margin: '10px' }}>
                                    <Card.Img variant="top" src="https://picsum.photos/640/360" />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                        <Button variant="primary">{item.price}</Button> &nbsp;
                                    </Card.Body>
                                </Card>
                            )}
                        </Wrapper>
                    </Col>
                </Row>
                test
            </Container>
        );
    }
}


export default Dashboard