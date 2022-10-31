import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { generarTraerUnDocumento } from '../../firebase/config';


  function Checkout() {
    
    const {orderId} = useParams();
    const [order, setOrder] = useState({});
   

    useEffect(() => {
      generarTraerUnDocumento(orderId)
      .then((resp) => setOrder(resp))
    }, [orderId]);
  
    console.log(order);
    

    return (
      <div>
        <h2 className="text-center fs-2">Gracias por tu compra! Tu Id de orden es: {orderId}</h2>
        <h3 className="text-center fs-3">Compraste unas:</h3>
        {order.data?.map((data) => (
          <h3 className="text-center" key={data.id}>{data.title}</h3>
        ))}
      </div>
    );
  }
  
  export default Checkout;