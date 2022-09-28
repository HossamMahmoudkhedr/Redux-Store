import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
        <Link to={`product/${id}`} style={{height:'100%'}}>
        <div className="ui link cards" style={{height: '100%'}}>
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
    )
  });
  return (
    // <div style={{ marginTop: '100px' }} className="four column wide" key={id}></div>
    <>
      <div className='four column wide' style={{ marginTop: '100px', display: "grid", gridTemplateColumns:' repeat(4, 1fr)', gap: '10px' }}>
      {renderList}
      </div>
    </>
  )
}


export default ProductComponent