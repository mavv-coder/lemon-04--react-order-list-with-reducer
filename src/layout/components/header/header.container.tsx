import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../../core/context";
import { switchRoutes } from "../../../core/router";
import { HeaderComponent } from "./header.component";
import { InputInfoStateReducer, actionIds } from "./header.reducer";

interface Props {
  orderState: number;
  handleProductState: (action: boolean) => void;
}

export const HeaderContainer: React.FC<Props> = (props) => {
  const history = useHistory();
  const { totalCost, formData, setFormData, productList } = useAppContext();
  const { orderState, handleProductState } = props;

  // Creates a reducer with all input state to set their style
  const [InputInfoState, dispatch] = React.useReducer(InputInfoStateReducer, {
    stateInputSuccess: false,
    orderNumInputSuccess: false,
    providerInputSuccess: false,
    dateInputSuccess: false,
  });

  // Checks if input fields have any value
  const isReadyFormDataToSubmit = (): boolean =>
    formData.orderNum && formData.provider && formData.date ? true : false;

  // Checks if all the products have been validated
  const isReadyOrderStateToSubmit = (): boolean =>
    productList.every((x) => x.state);

  // Goes to Checkout page
  const navigateToCheckout = (): void => {
    history.push(switchRoutes.checkout);
  };

  // Checks if everything is ready to submit and go to Checkout page
  const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    isReadyOrderStateToSubmit() && isReadyFormDataToSubmit()
      ? navigateToCheckout()
      : alert("Completa el formulario y valida los productos");
  };

  // Updates form properties with values from inputs
  // Then set FormData with new values
  const handleFormData = (value: string, type: string): void => {
    const newFormData = { ...formData, [type]: value };
    setFormData(newFormData);
  };

  // Checks the input styles when navigate from other pages
  const refreshAllInputStyleOnLoad = (): void => {
    formData.orderNum
      ? dispatch({ type: actionIds.setOrderNumSuccess, payload: true })
      : dispatch({ type: actionIds.setOrderNumSuccess, payload: false });
    formData.provider
      ? dispatch({ type: actionIds.setProviderSuccess, payload: true })
      : dispatch({ type: actionIds.setProviderSuccess, payload: false });
    formData.date
      ? dispatch({ type: actionIds.setDateSuccess, payload: true })
      : dispatch({ type: actionIds.setDateSuccess, payload: false });
  };

  // Update Input OrderNum style to success if the value is correct
  const handleNumberInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value
      ? dispatch({ type: actionIds.setOrderNumSuccess, payload: true })
      : dispatch({ type: actionIds.setOrderNumSuccess, payload: false });
  };

  // Update Input Provider style to success if the value is correct
  const handleProviderInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value
      ? dispatch({ type: actionIds.setProviderSuccess, payload: true })
      : dispatch({ type: actionIds.setProviderSuccess, payload: false });
  };

  // Update Input Date style to success if the value is correct
  const handleDateInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value
      ? dispatch({ type: actionIds.setDateSuccess, payload: true })
      : dispatch({ type: actionIds.setDateSuccess, payload: false });
  };

  React.useEffect(() => {
    dispatch({
      type: actionIds.setStateSuccess,
      payload: isReadyOrderStateToSubmit(),
    });
    refreshAllInputStyleOnLoad();
  }, [handleProductState]);

  return (
    <HeaderComponent
      InputInfoState={InputInfoState}
      handleSubmit={handleSubmit}
      totalCost={totalCost}
      orderState={orderState}
      formData={formData}
      handleProviderInputStyle={handleProviderInputStyle}
      handleNumberInputStyle={handleNumberInputStyle}
      handleDateInputStyle={handleDateInputStyle}
    />
  );
};
