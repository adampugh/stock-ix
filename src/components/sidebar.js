import React from 'react';

const categories = [
    'All',
    'Tops',
    'T-Shirts',
    'Shirts',
    'Pants',
    'Shoes',
    'Accessories'
]

const Sidebar = ({ filterItems }) => (
    <div className="sidebar">
        { categories.map(category => <button onClick={filterItems} key={category}>{category}</button>) }
    </div>
)

export default Sidebar;