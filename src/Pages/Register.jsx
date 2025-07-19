import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Authentication/AuthContext';
import AlreadyLoggedIn from '../Components/AlreadyLoggedIn';


const Register = () => {
  const [passwordError, setPasswordError] = useState('');
  const [showPass, setShowPass] = useState(true);

  const navigate = useNavigate();
  const { registerWithEmail, LoginGoogle, updateUser, user, Setuser } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must include at least one uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError('Password must include at least one lowercase letter.');
      return;
    }
    setPasswordError('');

    try {
      await registerWithEmail(email, password);
      await updateUser({ displayName: name, photoURL: photoURL });

      // Update user state locally so UI updates immediately
      Setuser({
        ...user,
        displayName: name,
        photoURL: photoURL,
      });

      toast.success('Registered successfully!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await LoginGoogle();
      toast.success('Logged in with Google!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (user) {
    return <AlreadyLoggedIn />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDEC] px-4">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden bg-white">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-[#F7F7F7] flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Us Today!</h2>
          <p className="text-gray-600 text-center max-w-xs">
            Register now to share, receive, and reduce food waste together.
          </p>
          
          
          
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-10 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Register</h2>
          <p className="text-gray-600 mb-6">Create a new account</p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#86A788] text-gray-800"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                required
                placeholder="Link to your profile photo"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#86A788] text-gray-800"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#86A788] text-gray-800"
              />
            </div>

                <div>
      <label className="block text-gray-700 mb-1">Password</label>
      <div className="relative">
        <input
          type={showPass ? 'text' : 'password'}
          name="password"
          required
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#86A788] text-gray-800"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setShowPass(!showPass);
          }}
          className="btn btn-xs absolute top-2 right-2 "
        >
          <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
          
        </button>
      </div>
      {passwordError && (
        <p className="text-red-500 text-sm mt-1">{passwordError}</p>
      )}
    </div>


            <button
              type="submit"
              className="w-full bg-[#114511] hover:bg-[#33cc33] text-white font-semibold py-2 rounded-md transition cursor-pointer"
            >
              Register
            </button>
          </form>

          <div className="my-4">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-blue-500 w-full text-white font-semibold flex items-center justify-center gap-2 py-2 rounded-md"
            >
              <img className="w-5 h-5" src="https://i.ibb.co/gFM2v5M2/google.png" alt="google" />
              Register with Google
            </button>
          </div>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-[#86A788] font-medium hover:underline">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
