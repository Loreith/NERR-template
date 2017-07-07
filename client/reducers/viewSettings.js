//View settings reducer for changing mobile/desktop ect
const reducer = (state={
  gridSize: null,
  drawerOpen: false,
  currWidth: 0
}, action) => {
  switch (action.type) {
    case "WINDOW_RESIZE": {
      const size = action.payload;
      const { currWidth } = state;
      let drawerOpen = state.drawerOpen;

      // if size has just dropped below 768, close drawer
      if (size < 768 && currWidth >= 768) {
        drawerOpen = false;
      } else if (size >= 768 && currWidth < 768) {
        // if size has just exceeded 768, open drawer
        drawerOpen = true;
      }

      return {
        ...state,
        drawerOpen,
        currWidth: size
      }
    }
    case "TOGGLE_DRAWER": {
     return {
       ...state,
       drawerOpen: !state.drawerOpen
     }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
