import React from 'react';
import QuestionMark from '../images/questionmark.jpg'

const Item = ({ item }) => {
    const { name, img } = item
    const src = img ? img : QuestionMark

    return (
        <div className="item__background">
            <div className="item">
                <img src={src} alt={name} />
            </div>
            <div className="item__hover">
                <p className="item__name">{name}</p>
            </div>
        </div>
    )
}


export default Item;