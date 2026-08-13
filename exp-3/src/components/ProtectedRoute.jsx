import { Navigate } from "react-router-dom";
import { getUser, isAuthenticated } from "../utils/auth";

function ProtectedRoute({ children, role }) {
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }

  const user = getUser();

  if (user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default ProtectedRoute;