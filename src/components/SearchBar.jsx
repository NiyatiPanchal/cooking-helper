import React from "react";

const SearchBar = (props) => {
  return (
    <div className="main-home-div">
      {/* <div className="center-div">
        <a href="" className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WEoO9adgivpDnegtLybP86OrQ5cHW6KRCg&usqp=CAU"
            alt=""
          />
          CookStar
        </a>
      </div> */}
      <form onSubmit={props.submits}>
        <div className="search-block">
     
          <label for="search">
            <img
              src="https://img.icons8.com/material-outlined/2x/search.png"
              alt=""
              className="icon"
            />
          </label>
          <input
          onChange={props.meth}
            type="search"
            name="search"
            id="search"
            placeholder="Search by recipe , ingredients , dish..."
           onchange={props.meth}
            value={props.name}

          />
          <input type="submit"  id="submit"  />
         
        </div>
        </form>
        {/* <div className="td-search center-div">TODAY’S POPULAR SEARCHES</div> */}
        {/* <div className="center-div buttons">
          <button className="btn">Categories</button>
          <button className="btn">Create Recipe</button>
        </div> */}
      </div>
  );
};
export default SearchBar;
