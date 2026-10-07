import Navbar from "../components/Navbar";
import { getUserFromToken } from "../utils/auth";

function Admin() {
  const user = getUserFromToken();

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Admin Panel</h1>

        <div className="card">
          <h2>Admin Access Granted</h2>

          <p>
            Welcome, <strong>{user?.username}</strong>
          </p>

          <p>
            Your role is <strong>{user?.role}</strong>.
          </p>

          <p>
            This page is protected using Role-Based Access Control.
          </p>
        </div>
      </div>
    </>
  );
}

export default Admin;