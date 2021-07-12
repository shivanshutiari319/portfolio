import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolIcon from '@material-ui/icons/School';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <SchoolIcon className="logo" />
            <span className="logo">NIT RAIPUR</span>
          
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 82369 21589</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span >shivanshu.tiwari.home@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/shivanshu-tiwari-060925172/" className="logoo" rel="noreferrer" target="_blank">shivanshu tiwari</a>
          </div>
        
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
