




import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About'
// import Search from './pages/Search'
// import Error from './pages/Error'
import Header from "./Header";
import SearchBar from "./SearchBar";
import Search from "./Search.jsx"
// import FilterSlidebar from "./FilterSlidebar";
import Footer from "./Footer";

function App() {
 return (
  <Router>
    <Header/>
    {/* <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/search">
        <Search/>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
    </Switch> */}
   
    {/* <FilterSlider/> */}
    <Search/>
    <Footer/>
 </Router>
 )

}

export default App;







// import React from 'react';
// import Header from "./Header";
// import Footer from "./Footer";
// const App = () => {
//     return (
//         <div>
//         <Header/>
//         <Footer/>
//         </div>
//     );
// }

// export default  App;
