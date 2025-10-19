import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
        <h1 className="font-semibold text-2xl text-center">
          Login Your Account
        </h1>
        <div className="card-body -mt-2">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center pt-3 font-semibold">
              Dont’t Have An Account ? <Link to="/auth/register" className="text-red-500 underline">Register</Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
