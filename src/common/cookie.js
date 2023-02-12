import Cookies from 'js-cookie';

const TOKEN_KEY = 'Admin-Token';
const ROLE_KEY = 'role';
const USER_KEY = 'user';

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token);
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY);
}

export function getRole() {
  return Cookies.get(ROLE_KEY);
}

export function setRole(role) {
  return Cookies.set(ROLE_KEY, role);
}

export function removeRole() {
  return Cookies.remove(ROLE_KEY);
}

export function getUser() {
  return Cookies.get(USER_KEY);
}

export function setUser(role) {
  return Cookies.set(USER_KEY, role);
}

export function removeUser() {
  return Cookies.remove(USER_KEY);
}
