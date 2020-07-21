import React, { useState } from 'react';

import Sidebar from './sidebar';
import Items from './items';

import items from '../items/items';

const MainContent = () => {
    const [ selectedItems, setSelectedItems ] = useState(items)

    const filterItems = e => {
        const category = e.target.innerHTML
        const categoryFormatted = category.toLowerCase().replace(/-/, '')
        const updatedCategory = categoryFormatted === 'all' ? items : items.filter(item => item.category === categoryFormatted)
        setSelectedItems(updatedCategory)
    }

    return (
        <div className="main-content">
            <Sidebar filterItems={filterItems} />
            <Items items={selectedItems} />
        </div>
    )
}

export default MainContent;
