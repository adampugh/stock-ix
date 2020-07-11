import React from 'react';

import Item from './item';

const Items = ({ items }) => items.map(item => <Item item={item} />)

export default Items;