import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbar container mx-auto  h-20 flex items-center justify-between border-b border-teal-900   ">
      <Link to="/" className="logo text-2xl font-medium text-teal-400">
        Teamtrak
      </Link>
      <nav className="flex gap-5">
        <div className="flex gap-5">
          <nav className="flex gap-5">
            {!user && (
              <div className="flex gap-5">
                <Link
                  to={"/login"}
                  className="hover:text-teal-400 duration-300"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="hover:text-teal-400 duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {user && (
              <div className="flex gap-5 items-center">
                <span>{user.email}</span>
                <button
                  onClick={handleLogout}
                  type="submit"
                  className=" bg-indigo-600 text-white py-2 px-3 rounded-lg hover:bg-indigo-50 hover:text-black duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
