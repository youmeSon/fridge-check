import React, { Component } from 'react';
import FridgeItem from './fridgeItem';

class FridgeItems extends Component {


    render() {
        return (
        <ul>
            {this.props.fridgeItems.map(item => (
                    <FridgeItem key={item.id} item={item} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete}/>
            ))
            }
        </ul>
        );
    }
}

export default FridgeItems;