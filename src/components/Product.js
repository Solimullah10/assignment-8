import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const { product, onAdd } = props;
    return (
        <div className='prodcut-container'>
            <div>
                <img src={product.img} alt={product.name} className="small" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <div>
                    <button onClick={() => onAdd(product)}>Add To Cart <span className='fw-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
                </div>
            </div>

        </div>
    );
};

export default Product;