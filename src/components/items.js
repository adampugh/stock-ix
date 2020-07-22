import React from 'react';

import Item from './item';

const Items = ({ items }) => (
    <div className="items">
        {items.map((item, i) => <Item item={item} key={i} />)}
    </div>
)

export default Items;
