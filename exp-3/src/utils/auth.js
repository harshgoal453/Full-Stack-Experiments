import { jwtDecode } from "jwt-decode";

export function generateToken(user) {
  const header = {
    alg: "HS256",
    typ: "JWT"
  };

  const payload = {
    username: user.username,
    role: user.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600
  };

  const encode = (data) => {
    return btoa(JSON.stringify(data))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };

  const encodedHeader = encode(header);
  const encodedPayload = encode(payload);

  const signature = btoa(
    `${encodedHeader}.${encodedPayload}.experiment3-secret`
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

export function saveToken(token) {
  sessionStorage.setItem("token", token);
}

export function getToken() {
  return sessionStorage.getItem("token");
}

export function removeToken() {
  sessionStorage.removeItem("token");
}

export function getUserFromToken() {
  const token = getToken();

  if (!token) {
    return null;
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      removeToken();
      return null;
    }

    return decoded;
  } catch (error) {
    console.error("JWT Decode Error:", error);
    return null;
  }
}

export function isAuthenticated() {
  return getUserFromToken() !== null;
}