import React, { Component } from 'react';

import Sidebar from './sidebar';
import Items from './items';

import items from '../items/items';

class MainContent extends Component {
    state = {
        selectedItems: []
    }

    componentDidMount() {
        this.setState(() => ({
            selectedItems: items
        }))
    }

    filterItems = e => {
        const category = e.target.innerHTML
        const categoryFormatted = category.toLowerCase().replace(/-/, '')
        const updatedCategory = categoryFormatted === 'all' ? items : items.filter(item => item.category === categoryFormatted)
        this.setState(() => ({
            selectedItems: updatedCategory
        }))
    }

    render() {
        const { selectedItems } = this.state;

        return (
            <div className="main-content">
                <Sidebar filterItems={this.filterItems} />
                <Items items={selectedItems} />
            </div>
        )
    }
}

export default MainContent;
