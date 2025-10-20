import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "./AuthProvider";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
