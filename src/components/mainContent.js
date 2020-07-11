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

    render() {
        const { selectedItems } = this.state;
        console.log('selectedUtens', selectedItems)

        return (
            <div className="main-content">
                <Sidebar />
                <Items items={selectedItems} />
            </div>
        )
    }
}

export default MainContent;
