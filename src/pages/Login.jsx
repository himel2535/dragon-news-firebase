import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { login, setUser } = use(AuthContext);

  const [error, setError] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        // navigate(`${location?.state ? location.state : "/"}`);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.code);
      });
    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
        <h1 className="font-semibold text-2xl text-center">
          Login Your Account
        </h1>
        <form onSubmit={handleLogin} className="card-body -mt-2">
          <fieldset className="fieldset">
            {/* ---Email--- */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* ---Password--- */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
           {
            error && <p className="text-red-600 font-xs">{error}</p>
           }
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center pt-3 font-semibold">
              Dont’t Have An Account ?{" "}
              <Link to="/auth/register" className="text-red-500 underline">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
