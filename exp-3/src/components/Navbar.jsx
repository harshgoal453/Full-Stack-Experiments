import { Link, useNavigate } from "react-router-dom";
import { getUserFromToken, removeToken } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const user = getUserFromToken();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Experiment 3</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>

        {user?.role === "admin" && (
          <Link to="/admin">Admin</Link>
        )}

        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;