import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { generarTraerUnDocumento } from '../../firebase/config';


  function Checkout() {

    const [order, setOrder] = useState([]);
    const {orderId} = useParams();

    useEffect(() => {
      generarTraerUnDocumento(orderId)
      .then((resp) => setOrder(resp));
    }, [orderId]);
  
    console.log(order);
  
    return (
      <div>
        <h2 className="text-center fs-2">Gracias por tu compra! Tu Id de orden es: {orderId}</h2>
      </div>
    );
  }
  
  export default Checkout;