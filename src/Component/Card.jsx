import React from 'react'

const Card = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem', padding: '4px' }}>
      <img src="{product.image}" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        



        {product.discount > 0 ? (<p className='card  ms-4' ><del>price:₹{product.price}</del> <span >₹{product.discountedPrice}</span></p>
        
        ) : (<p >price:₹{product.price}</p>)}



        
        <a href="#" className="btn btn-primary">View More</a>
        <button className='btn btn-secondary'>Add To Card</button>
      </div>
    </div>
  )
}

export default Card