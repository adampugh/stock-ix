import React from 'react';
import QuestionMark from '../images/questionmark.jpg'

const Item = ({ item }) => {
    const { name, img } = item

    return (
        <div className="item__background">
            { img ? (
                <>
                    <div className="item">
                        <img src={img} alt={name} />
                    </div>
                    <div className="item__hover">
                        <p className="item__name">{name}</p>
                    </div>
                </>
            ) : (
                <div className="item">
                    <img src={QuestionMark} alt={name} />
                </div>
            )}
        </div>
    )
}


export default Item;