import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
   
   if(items.length > 0) {
      return (
        <ProductsContainer>
        {
           items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)   
        }
        </ProductsContainer>
      );
   }

   return(
       <ProductsContainer>
   <p>Cargando...</p>
      </ProductsContainer>
   );

}

export default ItemList;
