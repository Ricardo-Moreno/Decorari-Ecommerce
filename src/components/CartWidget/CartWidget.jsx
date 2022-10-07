import decorariLogo from '../assets/decorariLogo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {

const { getItemQty } = useContext(CartContext)

  return (
    <> 
    <img className="img-fluid" width='200' src={ decorariLogo } alt='Logo Decorari'/>
    <Badge badgeContent={getItemQty()}>
    <ShoppingCartIcon />
    </Badge>
    </>
  )
}

export default CartWidget 