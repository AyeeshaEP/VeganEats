import { Link } from "react-router-dom";


function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">Dig into the Eats!
      See full list of eateries!</Link>
      <Link to="/new">Add Your Fave Eatery</Link>
    </nav>


  );
}

export default Nav;