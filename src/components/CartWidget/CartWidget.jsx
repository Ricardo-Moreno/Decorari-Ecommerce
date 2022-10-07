//import decorariLogo from '../assets/decorariLogo.png';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { Badge } from '@mui/material'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
 import {BsFillCartCheckFill} from 'react-icons/bs'
 
function CartWidget() {

const { getItemQty } = useContext(CartContext)

  return (
    <>
    <BsFillCartCheckFill>{getItemQty()}</BsFillCartCheckFill>
    {/*<Badge badgeContent={getItemQty()}>
    <ShoppingCartIcon />
  </Badge>*/}
    </>
  )
}

export default CartWidget 