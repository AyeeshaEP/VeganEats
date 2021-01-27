import { Link } from "react-router-dom";
import "./Nav.css";


function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">all eateries!</Link>
      <Link to="/new">New Eatery</Link>
    </nav>


  );
}

export default Nav;