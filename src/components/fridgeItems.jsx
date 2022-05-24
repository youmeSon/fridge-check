import React, { Component } from 'react';
import FridgeItem from './fridgeItem';

class FridgeItems extends Component {
    state = {
        fridgeItems: [
            { id:1, name: 'vegetable', count: 0},
            { id:2, name: 'beer', count: 0},
            { id:3, name: 'fruits', count: 0},
        ]
    }
    render() {
        return (
        <ul>
            {this.state.fridgeItems.map(item => (
                    <FridgeItem key={item.id} item={item}/>
            ))
            }
        </ul>
        );
    }
}

export default FridgeItems;