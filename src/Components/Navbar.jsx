import { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router";

import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "../Authentication/AuthContext";
import Loader from "./Loader";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged Out Successfully"))
      .catch((err) => toast.error(err.message));
  };

  



  if (loading) {
    return <Loader />;
  }

  const links = (
    <>
      <NavLink to="/" className="btn btn-ghost text-lg">Home</NavLink>
      <NavLink to="/available-foods" className="btn btn-ghost text-lg">Available Foods</NavLink>
      {user && (
        <>
          <NavLink to="/auth/add-food" className="btn btn-ghost text-lg">Add Food</NavLink>
          <NavLink to="/auth/manage-foods" className="btn btn-ghost text-lg">Manage My Foods</NavLink>
          <NavLink to="/auth/my-food-requests" className="btn btn-ghost text-lg">My Food Requests</NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#a988d6] backdrop-blur-md shadow-lg text-[#2f2f2f] px-6 fixed top-0 left-0 w-full z-50">


      
      <div className="navbar-start ">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </div>
          <ul tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#FFFDEC] rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold text-[#3E0A0A]">FoodShare</Link>
      </div>

      <div className="navbar-center hidden md:flex gap-4">
        {links}
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex gap-3 items-center">
            <div className="relative group">
              <img
                src={user.photoURL || "https://i.ibb.co/4f9ZRjT/default-profile.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-[#301452]"
                onError={(e) => (e.target.src = "https://i.ibb.co/rR8wtNZM/profile-user.png")}
              />
              
            </div>
            <button onClick={handleLogout} className="btn bg-[#FFCFCF] hover:bg-[#FFE2E2]">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/auth/Login" className="btn bg-[#FFCFCF] hover:bg-[#FFE2E2]">Login</Link>
            <Link to="/auth/Register" className="btn bg-[#301452] hover:bg-[#4040bf] text-white">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
