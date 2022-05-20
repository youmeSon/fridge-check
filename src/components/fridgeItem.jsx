import React, { Component } from 'react';

class FridgeItem extends Component {
    render() {
        return (
        <li className='item'>
            <span className="item-name">beer</span>
            <span className="item-count">8</span>
            <button className='item-button item-increase' >
                <i className="fas fa-plus-square"></i>
            </button>
            <button className='item-button item-decrease'>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className='item-button item-delete'>
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default FridgeItem;