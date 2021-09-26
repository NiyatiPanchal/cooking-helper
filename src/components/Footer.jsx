import React from 'react';
import "../css/footer.css"
let date=new Date().getFullYear();
console.log(date);
const Footer = () => {
    return (
        <div className="footer">

          <div className="footer-nav">
          <h3 style={{width:'100%',textAlign:'center'}} className="footer-text">Copyright &copy; 2021-{date} Cook-Star Inc. All rights Reserved</h3> 

          <div className="Home foo-nav "> <a className="foo-navs" href="#"><i class="fas fa-home"></i> <p className="name-links-nav-footer">Home</p></a></div>
          <div className="Home foo-nav "> <a className="foo-navs" href="#"><i class="fas fa-search"></i> <p className="name-links-nav-footer">search</p></a></div>
          <div className="Home foo-nav "> <a className="foo-navs" href="#"><i class="fas fa-utensils"></i> <p className="name-links-nav-footer">Create</p></a></div>

          </div> 
        </div>
    );
}

export default Footer;
