import React from 'react'
import './Products.css'
import {AiFillStar} from 'react-icons/ai'
import { BsFillBagHeartFill } from "react-icons/bs";

const Products = () => {
  return (
   <>
   <section className="card-container">
    <section className="card">
      <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoes" className='card-img'/>
      <div className="card-details"></div>
      <h3 className="card-title">Shoes</h3>
      <section className="card-reviews">
        <AiFillStar className="rating-start"/>
        <AiFillStar className="rating-start"/>
        <AiFillStar className="rating-start"/>
        <AiFillStar className="rating-start"/>
        <span className="total-reviews">4</span>
      </section>
      <section className="card-price">
        <div className="price">
        <del>$340</del>$200
        </div>
        <div className="bag">
        <BsFillBagHeartFill />
        </div>
      </section>
      
    </section>
   </section>
   </>
  )
}

export default Products
