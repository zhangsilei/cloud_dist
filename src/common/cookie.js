import Cookies from 'js-cookie';

const TOKEN_KEY = 'Admin-Token';
const ROLE_KEY = 'role';

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token);
}

export function getRole() {
  return Cookies.get(ROLE_KEY);
}

export function setRole(role) {
  return Cookies.set(ROLE_KEY, role);
}
