import React, { Component } from 'react';
import FridgeItem from './fridgeItem';

class FridgeItems extends Component {
    state = {
        fridgeItems: [
            { name: 'beer', count: 0},
            { name: 'vegetable', count: 0},
            { name: 'fruits', count: 0},
        ]
    }
    render() {
        return (
        <ul>
            {this.state.fridgeItems.map(item => (
                    < FridgeItem />
            ))
            }
        </ul>
        );
    }
}

export default FridgeItems;