import Navbar from "../components/Navbar";
import { getToken, getUserFromToken } from "../utils/auth";

function Dashboard() {
  const user = getUserFromToken();
  const token = getToken();

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Dashboard</h1>

        <div className="card">
          <h2>Authentication Successful</h2>

          <p>
            <strong>Username:</strong> {user?.username}
          </p>

          <p>
            <strong>Role:</strong> {user?.role}
          </p>

          <p>
            <strong>Token Status:</strong> Active
          </p>
        </div>

        <div className="card">
          <h2>JWT Token</h2>

          <textarea
            value={token || ""}
            readOnly
            rows="5"
          />
        </div>

        <div className="card">
          <h2>Decoded JWT Payload</h2>

          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}

export default Dashboard;