
import './Item.scss';
import PropTypes from 'prop-types'
import ItemCount from '../ItemCount/ItemCount';
import Stack from 'react-bootstrap/Stack';



function Item({title, imageSource, text, initial, stock, id}) {


return (
    <>
    <Stack gap={6} className="col-md-10 mx-auto">
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
    </div>
    <ItemCount
      initialCount={initial}
      stockCount={stock}
      detalleId={id}
        />
    </div>
    </Stack>
    </>
  )
} 


Item.propTypes ={
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Item