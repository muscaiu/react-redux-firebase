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

export const register = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: 'REGISTER_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'REGISTER_ERROR', err })
    })
  }
}