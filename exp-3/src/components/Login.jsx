import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

function Login() {
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleLogin = () => {
    login(role);

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Page</h2>

      <label>Select Role: </label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;