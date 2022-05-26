import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Basket = (props) => {
    const { cartItems, onRemove, selected } = props;
    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <p>Cart is Empty</p>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='product-info'>
                        <img className='product-img' src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                        <button onClick={() => onRemove(item)} className="remove"><span className='fw-icon'><FontAwesomeIcon icon={faTrash} /></span></button>
                    </div>
                </div>
            ))}
            <div>
                <button className='choose-btn' onClick={() => selected(cartItems)}>Choose 1 For Me</button>
            </div>
        </aside>
    );
};

export default Basket;