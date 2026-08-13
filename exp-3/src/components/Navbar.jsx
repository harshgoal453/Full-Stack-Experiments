import { Link, useNavigate } from "react-router-dom";
import { logout, isAuthenticated, getUser } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/user">User</Link> |{" "}
      <Link to="/admin">Admin</Link>

      {isAuthenticated() && (
        <>
          <span style={{ marginLeft: "20px" }}>
            Welcome {user.username} ({user.role})
          </span>

          <button
            onClick={handleLogout}
            style={{ marginLeft: "20px" }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;