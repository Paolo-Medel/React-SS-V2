import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="flex">
      <li className="bg-blue-900">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Ships">Ships</Link>
      </li>
      <li>
        <Link to="/Haulers">Haulers</Link>
      </li>
      <li>
        <Link to="/Docks">Docks</Link>
      </li>
    </ul>
  );
};
