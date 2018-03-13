const initialState = {
  persons: []
}

const personReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD' :
    return {
      ...state,
      persons: state.persons.concat({
        id: Math.random(),
        name: action.payload.name,
        age: action.payload.age
      })
    }
    case 'DELETE' :
    const newArr = state.persons.filter(element => element.id !== action.id);
    return {
      ...state,
      persons: newArr
    }
  }
  return state;
}

export default personReducer;
