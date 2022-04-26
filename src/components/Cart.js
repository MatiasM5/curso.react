
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';
import { Link } from 'react-router-dom';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>CARRITO</TitleCart>
            
            <Link to='/'><button> Seguir comprando </button></Link>
            {
                (test.cartList.length > 0)
                ? <button onClick={test.clear}>Vaciar Carrito</button>
                : <p> Tu carrito esta vacio </p>
            }
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
                          <ProductAmount>Item</ProductAmount>
                          </ProductAmountContainer>
                          <ProductPrice>
                              $ {item.cost} c/u
                              <p> Total por Prodcuto $</p>{test.calcTotalPorItem}
                          </ProductPrice>
                          </PriceDetail>
                        </Product>)
                    }
                    
                </ContentCart> 
                )
            }
            
            <p> Total $</p>{test.calcTotal}  
            
            <button> Finalizar compra </button>
        </WrapperCart>
    );
}

export default Cart;