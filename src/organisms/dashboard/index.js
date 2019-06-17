import React from 'react';
import Wrapper from './wrapper'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import SizesFilter from '../../Containers/SizeFilters'
import PropTypes from 'prop-types';
import PersistentDrawerLeft from '../../Containers/Sidebar'

class Dashboard extends React.Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        filters: PropTypes.array,
        sort: PropTypes.string
    };

    constructor(props){
        super(props);
        this.state = {
            filtered: "" || [],
            productsState: [] || "",
            matched: false,
            products: [],
            error: false,
            hasMore: true,
            isLoading: false,
            users: [],
            flag: false,
        };
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log(nextState, 111);
        console.log(nextProps, 222);
        const { filters: nextFilters } = nextProps;
        if (nextProps.filters !== this.props.filters) {
            this.handleFetchProducts(nextFilters);
        }
    }

    componentDidUpdate(nextProps) {
        if (nextProps.checkoutItems !== this.props.checkoutItems){
            console.log(nextProps.checkoutItems.length, 'length');
            console.log(this.state.flag, '66666');
            this.setState({
                flag: true
            });
            console.log(this.state.flag, '77777');
        }
    }

    handleFetchProducts = (filters) => {
        this.props.fetchProducts(filters)
    };

    callBackFilter = (size) => {
        this.setState({
            filtered: size
        })
    };

    addProductToCheckout = (item) => {
        this.props.proceedCheckoutSuccess(item)
        const {flag} = this.state;
        console.log(flag, '2222');
        let idx =  this.props.checkoutItems.find(item=>item.id) || "";
        if (flag === true || item.id === idx.id) {
            this.setState({
                matched: true
            });
        }
    };

    showProductsNumber = () => {
        const filteredItems = this.props.products && this.props.products && this.props.products.filter(item=>item ? item.title : "");
        if (filteredItems.length === 1 ){
           return  <dvi>{filteredItems.length} <span>Product Found</span> </dvi>
        } else if(filteredItems.length > 1) {
            return <dvi>{filteredItems.length} <span>Products Found</span> </dvi>
        } else if(filteredItems.length === 0){
            return <div>no products found</div>
        }
    };

    render() {
        console.log(this.state.matched, 'matched');
        console.log(this.props.checkoutItems, 'checkoutItems');
        const filteredItems = this.props.products.filter(item=>item ? item.title : "");
        console.log(filteredItems, 'filtered');
        return (
            <Container style={{ padding: '1rem', marginTop: '7%' }}>
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
                            {this.showProductsNumber()}
                        </div>
                        <Wrapper>
                            {filteredItems.map((item, id) =>
                                <Card style={{ width: '15rem', margin: '10px' }} key={id}>
                                    <Card.Img variant="top" src="https://picsum.photos/640/360" />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and
                                        </Card.Text>
                                        <Button variant="primary">{item.price}</Button> &nbsp;
                                        <div variant="primary">{item.availableSizes.map(item=><span>{item}</span>)}&nbsp;</div> &nbsp;
                                        <Button
                                            disabled={this.state.matched}
                                            onClick={()=>this.addProductToCheckout(item)}
                                            >
                                            Add Product</Button>
                                    </Card.Body>
                                </Card>
                            )}
                        </Wrapper>
                    </Col>
                </Row>
                <PersistentDrawerLeft
                    filters={this.props.filters}
                />
            </Container>
        );
    }
}

export default Dashboard