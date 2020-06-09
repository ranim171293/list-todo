const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: true,
        }
      ];
    default:
      return state
  }
}

export default todos