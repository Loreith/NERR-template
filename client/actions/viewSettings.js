//View settings actions
export const handleResize = (size) => {
  return {
    type: "WINDOW_RESIZE",
    payload: size
  }
};

export const toggleDrawer = () => {
  return {
    type: "TOGGLE_DRAWER"
  }
}
