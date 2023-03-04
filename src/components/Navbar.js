import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto  h-20 flex items-center justify-between border-b border-teal-900   ">
      <Link to="/" className="logo text-2xl font-medium text-teal-400">
        Teamtrak
      </Link>
      <nav className="flex gap-5">
        <div className="flex gap-5">
          <Link to={"/login"} className="hover:text-teal-400 duration-300">
            Login
          </Link>
          <Link to={"/signup"} className="hover:text-teal-400 duration-300">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
