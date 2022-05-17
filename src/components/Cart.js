
import { useContext,  } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice,  } from './styledComponents';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const finishOrder = () => {
        const productsDataBase = test.cartList.map(products => ({
          id: products.idItem,
          title: products.nameItem,
          price: products.priceItem,
          qty: products.qtyItem
        }));
    
        test.cartList.forEach(async (products) => {
          const itemRef = doc(db, "productos", products.idItem);
          await updateDoc(itemRef, {
            stock: increment(-products.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Moya Matias",
            email: "matiasm@gmail.com",
            phone: "45614876"
          },
          total: test.calcTotal(),
          items: productsDataBase,
          date: serverTimestamp()
        };
      
        console.log(order);
        
        const createOrderInFirestore = async () => {
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
      
        createOrderInFirestore()
          .then(result => alert('Se genero tu orden de compra!. Porfavor toma nota del ID de tu orden.\n\n\nOrder ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
      
        test.clear();

    }

    return (
        <WrapperCart>
            <TitleCart>CARRITO</TitleCart>
            
            <Link to='/'><button> Seguir comprando </button></Link>
            {
                (test.cartList.length > 0)
                ? <button onClick={test.clear}>Vaciar Carrito</button>
                : <p> Tu carrito esta vacio </p>
            }
            <div>
            {
                test.cartList.length > 0 ?
                test.cartList.map(item => 

                <ContentCart>
                    
                        <Product>
                          <ProductDetail>
                          <ImageCart src={item.imgItem} />
                          <button onClick={() => test.removeItem(item.idItem)}> Eliminar Producto</button>
                          <Details>
                          <span>
                            <b>Product:</b> {item.nameItem}
                          </span>
                          </Details>
                          </ProductDetail>
                          <PriceDetail>
                          <ProductAmountContainer>
                          <ProductAmount>Item</ProductAmount>
                          </ProductAmountContainer>
                          <ProductPrice>
                              $ {item.costItem} c/u
                              <p> Total por Prodcuto $ {test.calcTotalPorItem(item.idItem)}</p> 
                          </ProductPrice>
                          </PriceDetail>
                        </Product> 
                    </ContentCart> 
                )

               :<></>
            }
            </div>

            <div>
                { 
                test.cartList.length > 0 && 
                <div>
                    <h1> Tu orden </h1>
                    <p> Total $ {test.calcTotal()} </p>
                    <button onClick={finishOrder}> Finalizar compra </button>
                </div>
                }
                
            </div>

        </WrapperCart>    
    );
}

export default Cart;