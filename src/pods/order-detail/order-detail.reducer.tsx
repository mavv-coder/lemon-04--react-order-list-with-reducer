interface Action {
  type: string;
  payload: any;
}

export const actionIds = {
  setOrderState: "setOrderState",
  getOrderStatePercentage: "getOrderStatePercentage",
};

export const orderStateReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case actionIds.setOrderState:
      return action.payload;
    default:
      return state;
  }
};
