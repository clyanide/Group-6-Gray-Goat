const SelectedFooter = (state = { selected: "FOODS" }, action) => {
  switch (action.type) {
    case "FOODS":
      return { selected: "FOODS" };

    case "MANUAL_ENTRY":
      return { selected: "MANUAL_ENTRY" };

    case "SPECIAL_ENTRY":
      return { selected: "SPECIAL_ENTRY" };

    default:
      return state;
  }
};

export default SelectedFooter;
