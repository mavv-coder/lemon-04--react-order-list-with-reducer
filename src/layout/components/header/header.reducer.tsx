export interface InputInfoState {
  stateInputSuccess: boolean;
  orderNumInputSuccess: boolean;
  providerInputSuccess: boolean;
  dateInputSuccess: boolean;
}

interface Action {
  type: string;
  payload: boolean;
}

export const actionIds = {
  setStateSuccess: "setStateSuccess",
  setOrderNumSuccess: "setOrderNumSuccess",
  setProviderSuccess: "setProviderSuccess",
  setDateSuccess: "setDateSuccess",
};

export const InputInfoStateReducer = (
  state: InputInfoState,
  action: Action
): InputInfoState => {
  switch (action.type) {
    case actionIds.setStateSuccess:
      return { ...state, stateInputSuccess: action.payload };
    case actionIds.setOrderNumSuccess:
      return { ...state, orderNumInputSuccess: action.payload };
    case actionIds.setProviderSuccess:
      return { ...state, providerInputSuccess: action.payload };
    case actionIds.setDateSuccess:
      return { ...state, dateInputSuccess: action.payload };
    default:
      return state;
  }
};
