import React from 'react';
import ListContainer from './listContainer'
import ListElement from './listelement'

export const ProductList = ({checkoutItems}) => {
    return (
        <ListContainer>
            {checkoutItems ? checkoutItems.map(item =>
                <ListElement>
                     <h6> {item.price}</h6>
                     <h6> {item.title}</h6>
                </ListElement>) : ""}
        </ListContainer>
    )
};

export default ProductList;