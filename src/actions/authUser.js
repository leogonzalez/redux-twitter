export const AUTH_USER = "AUTH_USER";

export function authUser(user) {
  return {
    type: AUTH_USER,
    user
  }
}
