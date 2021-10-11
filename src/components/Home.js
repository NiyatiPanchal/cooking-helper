import React,{useEffect} from "react";
import List from "./List";
import axios from 'axios'
import {Link} from 'react-router-dom';
import "../css/Home.css";
import Footer from "./Footer";
import Header from "./Header";
const Home = () => {
  // CHECKING BACKEND CONNECTION
//   useEffect(()=>{
//    async function ef() {   let aa=  await axios.get('http://localhost:3001/');
//    console.log(aa.data);}
//  ef();
//   },[]);
  
  return (
      <>
    <Header/>
    <div className="whole-page">
      <div className="home-info">
        <section className="main-section intro">
          <h1>Cook Your Meal with Cookstar</h1>
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
        <List name="User's Recipes" routes="/users"/>
        <List name="Recent Recipes" routes="/search"/>
        <List name="Favourite Recipes" routes="/search" />
      </div>
    </div>
<Footer/>
    </>
  );
};

export default Home;
