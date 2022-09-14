import React from 'react'
import './Card.scss';
import PropTypes from 'prop-types'


function Card({title, imageSource, text}) {
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
    <a href="#!" className='btn btn-outline-secondary rounded-0 '>Go to this Webside</a>
    </div>
    </div>
    </>
  )
}

Card.propTypes ={
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card