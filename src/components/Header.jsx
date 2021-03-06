import React from 'react';
import "../css/header.css";
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="navbar" >
         
<div className="nav-left">
<div className="img-logo">
<Link to="/">
<img className="nav-logo"
            src="images/logo.png"
            alt="logo"
          />
             </Link>
</div>
<Link to="/">
<div style={{textDecoration:'none'}} className="nav-logo-name">

<h1 className="logo-start">Cook-</h1>
<h1 className="logo-end">star</h1>

</div>
</Link>
<div className="nav-left-content create-recipe"><Link to="/create" className="create signup-link" href="#"><i class="fas fa-utensils"></i>  <span className="name-links-nav">Create</span></Link></div>
<div className="nav-left-content  sign-up"><a className=" create signup-link" href="#"><i class="fas fa-sign-in-alt"></i> <span className="name-links-nav">Sign Up</span></a></div>
</div>
<div className="nav-right">
    <div className="Home nav-links"> <Link to="/"className="nav-links" href="#"><i class="fas fa-home"></i> <span className="name-links-nav">Home</span></Link></div>
    <div className="About nav-links"> <Link to="/about" className="nav-links" href="#"><i class="fas fa-address-card"></i> <span className="name-links-nav">About</span></Link></div>
    <div className="fav nav-links"> <a className="nav-links" href="#"><i class="fas fa-heart"></i> <span className="name-links-nav">Favourite</span></a></div>
    <div className="Login nav-links"> <a className="nav-links" href="#"><i class="fas fa-sign-in-alt"></i> <span className="name-links-nav">Login</span></a></div>
    <div className="responsive-header-nav"> <a className="signup-link-res" href="#">Sign up</a></div>
    <div className="responsive-header-nav"> <a className="login-link-res" href="#">Login</a></div>
</div>
            </nav>
        </div>
    );
}

export default Header;
