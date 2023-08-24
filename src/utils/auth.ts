// src/authUtils.ts
import Cookies from 'js-cookie';

export function isAuthenticated(): boolean {
  const token = Cookies.get('token');
  return !!token;
}
