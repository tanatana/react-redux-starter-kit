// ------------------------------------
// Constants
// ------------------------------------
export const AUTH_SET = 'AUTH_SET'

// ------------------------------------
// Actions
// ------------------------------------
export function login () {
  return {
    type    : AUTH_SET,
    payload : true
  }
}

export function logout () {
  return {
    type    : AUTH_SET,
    payload : false
  }
}

export const actions = {
  login,
  logout
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [AUTH_SET] : (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
