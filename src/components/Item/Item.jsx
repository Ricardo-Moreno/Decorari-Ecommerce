
import './Item.scss';
import PropTypes from 'prop-types'
import ItemCount from '../ItemCount/ItemCount';



function Item({title, imageSource, text, initial, stock}) {
 
  
return (
    <>
    <div className='card text-center bg-succes'>
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
    </div>
    <ItemCount
      initialCount={initial}
      stockCount={stock}
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