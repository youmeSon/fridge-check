import React, { Component } from 'react';

class FridgeItem extends Component {
    state = {
        count: 0,
    }

    handleIncrement =() => {
        this.setState({count: this.state.count + 1});
    }

    handleDecrement =() => {
        const count = this.state.count - 1
        this.setState({count: count < 0 ? 0 : count });
    }
    render() {
        return (
        <li className='item'>
            <span className="item-name">beer</span>
            <span className="item-count">{this.state.count}</span>
            <button className='item-button item-increase' onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className='item-button item-decrease' onClick={this.handleDecrement}>
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