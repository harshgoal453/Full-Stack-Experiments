import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken, saveToken } from "../utils/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    const user = {
      username,
      role
    };

    const token = generateToken(user);

    saveToken(token);

    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>JWT Authentication</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>

        <p className="demo-text">
          Select a role to test RBAC.
        </p>
      </div>
    </div>
  );
}

export default Login;