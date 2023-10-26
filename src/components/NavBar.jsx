import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Ships">Ships</Link>
      </div>
      <div>
        <Link to="/Haulers">Haulers</Link>
      </div>
      <div className="">
        <Link to="/Docks">Docks</Link>
      </div>
    </div>
  );
};
