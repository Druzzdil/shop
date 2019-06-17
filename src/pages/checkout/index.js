import React, {useState, Suspense} from 'react';
import CheckoutContainer from './checkoutStyles'
const AddToBasket = React.lazy(()=>import('../../organisms/basket'));

const Checkout = () => {
  const [number, setItemNumber] = useState(0);

  return (
      <CheckoutContainer>
          checkout example
          <button onClick={() =>setItemNumber(number+1)}>
              Click me
          </button>
          <Suspense>
              <AddToBasket/>
          </Suspense>
      </CheckoutContainer>
  )
};