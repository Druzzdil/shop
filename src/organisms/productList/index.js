import React from 'react';
import ListContainer from './listContainer'
import ListElement from './listelement'
import Select from '../../atoms/inputs/select'

export const ProductList = ({checkoutItems}) => {
    return (
        <ListContainer>
            {checkoutItems ? checkoutItems.map(item =>
                <ListElement>
                     <h6> {item.price}</h6>
                     <h6> {item.title}</h6>
                    <Select/>
                </ListElement>) : ""}
        </ListContainer>
    )
};

export default React.memo(ProductList)