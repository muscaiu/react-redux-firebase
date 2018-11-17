const initState = {
  projects: [
    { id: 1, title: 'Hr App', content: 'What is the content!', date: '14 Nov 9am' },
    { id: 2, title: 'Project One', content: 'Project One Content', date: '15 Nov 10am' },
    { id: 3, title: 'Unicorn', content: 'Unicord desktop content!', date: '16 Nov 11am' },
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': {
      console.log(action)
      return state;
    }
    case 'CREATE_PROJECT_ERROR': {
      console.log('create projet error', action.err)
      return state;
    }
    default:
      return state;
  }
};

export default projectReducer;
