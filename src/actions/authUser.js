export const SET_AUTH_USER = "AUTH_USER";

export function authUser(user) {
  return {
    type: SET_AUTH_USER,
    user
  }
}
