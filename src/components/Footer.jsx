import React from 'react';
import "../css/footer.css";
import {Link} from 'react-router-dom';
let date=new Date().getFullYear();
console.log(date);
const Footer = () => {
    return (
        <div className="footer">

          <div className="footer-nav">
          <h3 style={{width:'100%',textAlign:'center'}} className="footer-text">Copyright &copy; 2021-{date} Cook-Star Inc. All rights Reserved</h3> 

          <div className="Home foo-nav "> <Link to="/" className="foo-navs" href="#"><i class="fas fa-home"></i> <p className="name-links-nav-footer">Home</p></Link></div>
          <div className="Home foo-nav "> <Link to="/search" className="foo-navs" href="#"><i class="fas fa-search"></i> <p className="name-links-nav-footer">search</p></Link></div>
          <div className="Home foo-nav "> <Link to="/create" className="foo-navs" href="#"><i class="fas fa-utensils"></i> <p className="name-links-nav-footer">Create</p></Link></div>

          </div> 
        </div>
    );
}

export default Footer;
