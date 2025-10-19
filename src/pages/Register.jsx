import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
        <h1 className="font-semibold text-2xl text-center">
          Register an Account
        </h1>
        <div className="card-body -mt-2">
          <fieldset className="fieldset">
            {/* ---Name--- */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* ---Photo URL--- */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
            {/* ---Email--- */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* ---Password--- */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="text-center pt-3 font-semibold">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-red-500 underline">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
