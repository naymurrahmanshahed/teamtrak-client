import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto  h-20 flex items-center border-b border-teal-900   ">
      <Link to="/" className="logo text-2xl font-medium text-teal-400">
        Teamtrak
      </Link>
    </div>
  );
};

export default Navbar;
