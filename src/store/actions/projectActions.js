export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //pausing the dispatch
    const firestore = getFirestore();
    //make async call
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Cris',
      authorLAstName: 'Mus',
      authorId: 12345,
      createdAt: new Date()
    }).then((res) => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })

  }
};
