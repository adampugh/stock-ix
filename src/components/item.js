import React from 'react';

const Item = ({ item }) => {
    const { name, img } = item

    return (
        <div className="item">
            <img src={img} alt={name} />
        </div>   
    )
}


export default Item;