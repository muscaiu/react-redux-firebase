export const createProject = (project) => {
  console.log('project', project);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //pausing the dispatch
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorInitials: profile.initials,
      authorId,
      createdAt: new Date()
    }).then((res) => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
};
