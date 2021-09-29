import React from "react";
import List from "./List";

import {Link} from 'react-router-dom';
import "../css/Home.css";
import Footer from "./Footer";
import Header from "./Header";
const Home = () => {
  return (
      <>
    <Header/>
    <div className="whole-page">
      <div className="home-info">
        <section className="main-section intro">
          <h1>Cook Your meal with Cookstar</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            consequatur veritatis veniam velit voluptas tempore at aliquid
            ducimus optio ab magni, neque, quos officiis dolore perspiciatis
            maiores amet esse alias! Incidunt magni non corrupti sit at adipisci
            suscipit voluptas distinctio!
          </p>

          <Link to="/search" className="btn" style={{position: "relative",top:'20px'}}>Search Recipe</Link>
        </section>
        <section className="main-section img-grid">
          <img
            src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"
            alt=""
          />
        </section>
      </div>
      <div>
        <List name="User's Recipes" />
        <List name="Recent Recipes" />
        <List name="Favourite Recipes" />
      </div>
    </div>
<Footer/>
    </>
  );
};

export default Home;
