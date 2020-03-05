const initialState = {
  masterKey: Math.random(),
  superMode: false
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
      case "updateKey":
        state.masterKey = Math.random();
        return state;
      case "toggleSuperMode":
        state.superMode = !state.superMode;
        return state;

      default:
        return state;
    }
}

export default rootReducer;
