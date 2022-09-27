import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, ratings, seller, price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>

            <h4>Manufacturer: {seller}</h4>
            <p>Ratings: {ratings} stars</p>

            <div>
                <button onClick={ ()=> props.handleAddToCart(props.product)} className='cart-btn'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>


        </div>
    );
};

export default Product;