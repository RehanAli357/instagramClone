import react from "react";
import '../Navigation/nav.css';
import logo from '../Images/logo.png';
import home from '../Images/home.png';
import message from '../Images/message.jpg'
import Add from '../Images/add.png';
import Loc from '../Images/loc.png';
import Heart from '../Images/heart.png';
import Mine from '../Images/pic.png';
const NavBar = () =>{
    return(
        <react.Fragment>
            <nav>
                <div className="logo"><img src={logo} alt="Logo" /></div>
                <div className="navserch">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="navbtn">
                    <div className="home pbtn"><img src={home} alt="home" /></div>
                    <div className="text pbtn"><img src={message} alt="message" /></div>
                    <div className="plus pbtn"><img src={Add} alt="add" /></div>
                    <div className="compas pbtn"><img src={Loc} alt="loc" /></div>
                    <div className="heart pbtn"><img src={Heart} alt='heart' /></div>
                    <div className="user pbtn"><img src={Mine} alt=' 📷 '/></div>
                </div>
                
            </nav>
        </react.Fragment>
    );
}

export default NavBar;