import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import userDefaultPic from "../../../assets/images/favpng_cat-user-profile-avatar.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/faq">Faq</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/discounts">Discounts</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar px-10 py-2 rounded-full container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div>
          <h2 className="text-violet-400 text-2xl font-extrabold hidden md:block">
            ENIGMA EVENTS
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu bg-violet-400 text-white font bold menu-horizontal p-4 rounded-full">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {user && user.displayName ? (
          <div className="hidden md:block">
            <h2>{user.displayName}</h2>
          </div>
        ) : user ? (
          <div className="hidden md:block">
            <h2>{user.email}</h2>
          </div>
        ) : null}
        {user && user.photoURL ? (
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-110 rounded-full ">
              <img src={user.photoURL} />
            </div>
          </label>
        ) : user ? (
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-110 rounded-full">
              <img src={userDefaultPic} />
            </div>
          </label>
        ) : null}
        {user ? (
          <button onClick={handleSignOut} className="btn btn-neutral">
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-neutral">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
