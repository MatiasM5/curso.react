import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>CARRITO</TitleCart>
            <button onClick={test.clear}>Vaciar Carrito</button>
            {
                test.cartList.length > 0 && (
                <ContentCart>
                    {
                        test.cartList.map(item => 
                        <Product>
                          <ProductDetail>
                          <ImageCart src={item.image[0]} />
                          <button onClick={test.removeItem}> Eliminar Producto</button>
                          <Details>
                          <span>
                            <b>Product:</b> {item.name}
                          </span>
                          </Details>
                          </ProductDetail>
                          <PriceDetail>
                          <ProductAmountContainer>
                          <ProductAmount>1 items</ProductAmount>
                          </ProductAmountContainer>
                          <ProductPrice>$ {item.cost} c/u</ProductPrice>
                          </PriceDetail>
                        </Product>)
                    }
                    
                </ContentCart> 
                )
            }
            
        </WrapperCart>
    );
}

export default Cart;