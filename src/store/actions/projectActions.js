export const createProject = (project) => {
  return (dispatch, getState) => {
    //pausing the dispatch
    //make async call
    dispatch({ type: 'CREATE_PROJECT', project })
  }
};
