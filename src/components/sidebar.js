import React from 'react';

const categories = [
    'All',
    'T-Shirts',
    'Shirts',
    'Pants',
    'Tops',
    'Shoes',
    'Accessories'
]

const Sidebar = ({ filterItems }) => (
    <div className="sidebar">
        { categories.map(category => <button onClick={filterItems} key={category}>{category}</button>) }
    </div>
)

export default Sidebar;