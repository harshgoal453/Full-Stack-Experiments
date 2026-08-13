// Save token in localStorage
export const login = (role) => {
  const token = btoa(
    JSON.stringify({
      username: "Harsh",
      role: role,
    })
  );

  localStorage.setItem("token", token);
};

// Get token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Decode token
export const getUser = () => {
  const token = getToken();

  if (!token) return null;

  return JSON.parse(atob(token));
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};

// Check login
export const isAuthenticated = () => {
  return getToken() !== null;
};