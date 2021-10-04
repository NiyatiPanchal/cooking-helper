import React from "react";
import {Link} from 'react-router-dom'
const Cards = ({ id, image, label}) => {
  return (
    <div style={{height:'400px'}} className="cards">
      <img width="260" height="260" src={image} alt="" />
      <h2 style={{textAlign:'center'}}>{label}</h2>
      <Link to={`/item/${label}`}>  <button style={{cursor:'pointer',display:'block',position:'absolute',top:'380px',marginLeft:'100px',fontWeight: 'bolder',fontSize: '20px', padding:'1px'}} ><i class="fas fa-eye"></i> View </button></Link>

    </div>
  );
};

export default Cards;
