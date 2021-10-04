import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import SingleFoodItem from "./SingleFoodItem";
import Home from './Home';
import SearchBar from "./SearchBar";
import Search from "./Search.jsx";
// import FilterSlidebar from "./FilterSlidebar";
import Footer from "./Footer";
import Detail from "./Detail";
import UserRecipe from './UserRecipe';
import UserRecipePage from './UserRecipePage';


function App() {
  // window.addEventListener('scroll',function(e) {{
  //   console.log('s');
  //  }});
 return (
  <Router>
    
     <Switch>
      <Route exact path="/">
        <Home/>
        
      </Route>
     <Route path="/create" >
     <UserRecipe/>
     </Route>
      <Route path="/search">
        <Search/>
      </Route>
      <Route exact path="/users">
        <UserRecipePage/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route exact path="/users/:id">
            <Detail/>
      </Route>
      <Route  path="/item/:name">
            <SingleFoodItem/>
      </Route>
    </Switch>   
   
    {/* <FilterSlider/> */}
    
    
   
   
 </Router>
 )

}

export default App;







