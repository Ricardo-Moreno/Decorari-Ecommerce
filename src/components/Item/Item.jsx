
import './Item.scss';
import { Link } from 'react-router-dom';



function Item({title, imageSource, text, id}) {


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
        text ? text : 'Detalle'
      }
      </p>
      <Link to={`detalle/${id}`} >
      <button className='btn btn-outline-secondary rounded-0'>Ver Detalle</button>
      </Link>
    </div>
    </div>
    </>
  )
}




export default Item