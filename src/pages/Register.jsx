import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { setUser, createUser } = use(AuthContext);


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
    console.log({ name, email, photo, password });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
        <h1 className="font-semibold text-2xl text-center">
          Register an Account
        </h1>
        <form onSubmit={handleRegister} className="card-body -mt-2">
          <fieldset className="fieldset">
            {/* ---Name--- */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />

            {/* ---Photo URL--- */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

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

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center pt-3 font-semibold">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-red-500 underline">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
