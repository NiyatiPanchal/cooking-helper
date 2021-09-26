import React from 'react';

const Card = (props) => {
    return (

        <div className="main-card">
            <div className="img-container">
                <img src={props.img} alt="food image" />
            </div>
            <div className="card-info">
                <h3>{props.title}</h3>
                {/* <button className="fav-btn"><FaRegHeart/></button> */}
            </div>
            <p>{props.info}</p>
            <a href={props.link}  target="_blank" className="recipe-btn">Recipe</a>
        </div>

    );
}

export default Card;
