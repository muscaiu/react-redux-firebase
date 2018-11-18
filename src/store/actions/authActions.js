export const login = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((res) => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}
