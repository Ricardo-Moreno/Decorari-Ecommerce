
import './Item.scss';
import PropTypes from 'prop-types'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';



function Item({title, imageSource, text, initial, stock, id}) {


return (
    <>
    <div className='card text-center bg-succes margin-tod'>
      <div className='overflow'>
        <img className='img card-img-top' src={imageSource} alt="" />
      </div>
    <div className='card-body text-secondari'>
    <h4 className='card-title text-secondary'>{title}</h4>
    <p className='card-text text-secondary'>
      {
        text ? text : 'Lorem ipsum dolor si'
      }
      </p>
      <Link to={`detalle/${id}`} >
      <button className='btn btn-outline-secondary rounded-0'>Comprar</button>
      </Link>
    </div>
    <ItemCount
      initialCount={initial}
      stockCount={stock}
      detalleId={id}
        />
    </div>
    </>
  )
} 


Item.propTypes ={
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Item