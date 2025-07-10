import React, {useContext} from 'react'

import { ShopContext } from '../ShopContext/ShopContext';

const ProductList = () => {
  const { products } = useContext(ShopContext)
  
  
  
  return (
    <div>
      <div className='product_list'>
        <h2>Our Elegant Collections</h2>
        <div className='product_grid'>
          {products.map((product)=>{
            console.log(product);
            
            const {id, image, title, price} = product;
            return(
              <div className="product_card" key={id}>
                <img src={image} alt="" className='product_image' width="50px" />
                <div className="product_info">
                  <h4>{title} </h4>
                  <p>${price} </p>
                </div>
                <button>Add To Cart</button>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default ProductList