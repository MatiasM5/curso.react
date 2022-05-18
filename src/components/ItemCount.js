import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const suma = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const resta = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Button variant="text" onClick={suma}><Add /></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={resta}><Remove /></Button>
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to Cart</Button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;