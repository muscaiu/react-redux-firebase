export const login = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((res) => {
      console.log('login sucess');
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
      console.log('login error', err);
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}

export const logout = () => {
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      console.log('logout success');
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}
