import React, { Component } from 'react';
import FridgeItem from './fridgeItem';

class FridgeItems extends Component {
    state = {
        fridgeItems: [
            { id:1, name: 'vegetable', count: 0},
            { id:2, name: 'beer', count: 0},
            { id:3, name: 'fruits', count: 0},
        ],
    };

    handleIncrement = (item) => {
        const fridgeItems = [...this.state.fridgeItems];
        const index = fridgeItems.indexOf(item);
        fridgeItems[index].count++;
        this.setState({fridgeItems})
    }

    handleDecrement = (item) => {
        const fridgeItems = [...this.state.fridgeItems];
        const index = fridgeItems.indexOf(item);
        const count = fridgeItems[index].count - 1;
        fridgeItems[index].count = count < 0 ? 0 : count;
        this.setState({fridgeItems})
    }

    handleDelete = (item) => {
        const fridgeItems = this.state.fridgeItems.filter(thing => thing.id !== item.id);
        this.setState({fridgeItems})
    }
    render() {
        return (
        <ul>
            {this.state.fridgeItems.map(item => (
                    <FridgeItem key={item.id} item={item} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>
            ))
            }
        </ul>
        );
    }
}

export default FridgeItems;