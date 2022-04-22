import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const ItemLink = () => {
    return (
    <div>
       <Link to='/Cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
    </div>


    );
}

export default ItemLink;
