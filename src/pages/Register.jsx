import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { setUser, createUser, updateUser } = useContext(AuthContext);

  const [nameError, setNameError] = useState("");

  const navigate=useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (name.length < 3) {
      setNameError("Please provide a name with more than 3 characters");
      return;
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // --- Update Profile ---
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/")
            e.target.reset(); 
          })
          .catch((error) => {
            console.log("Update error:", error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log("Register error:", error.message);
        setNameError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl pt-5">
        <h1 className="font-semibold text-2xl text-center">
          Register an Account
        </h1>
        <form onSubmit={handleRegister} className="card-body -mt-2">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" required />

            {nameError && <p className="text-red-700 text-xs">{nameError}</p>}

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center pt-3 font-semibold">
              Already Have An Account?{" "}
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
