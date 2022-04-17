import { Link } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button className="home">Home</button>
        </Link>
        <Link to="/sign-up">
          <button className="signUp">Sign Up</button>
        </Link>
        <Link to="/sign-in">
          <button className="signIn">Sign In</button>
        </Link>
      </div>
    </>
  );
};
