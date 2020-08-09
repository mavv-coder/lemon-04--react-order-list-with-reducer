import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../../core/context";
import { switchRoutes } from "../../../core/router";
import { HeaderComponent } from "./header.component";

interface Props {
  orderState: number;
  handleProductState: (action: boolean) => void;
}

export const HeaderContainer: React.FC<Props> = (props) => {
  const history = useHistory();
  const { totalCost, formData, setFormData, productList } = useAppContext();
  const { orderState, handleProductState } = props;
  const [stateSuccess, setStateSuccess] = React.useState<boolean>(false);
  const [orderNumSuccess, setOrderNumSuccess] = React.useState<boolean>(false);
  const [providerSuccess, setProviderSuccess] = React.useState<boolean>(false);
  const [dateSuccess, setDateSuccess] = React.useState<boolean>(false);

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
    formData.orderNum ? setOrderNumSuccess(true) : setOrderNumSuccess(false);
    formData.provider ? setProviderSuccess(true) : setProviderSuccess(false);
    formData.date ? setDateSuccess(true) : setDateSuccess(false);
  };

  // Update Input OrderNum style to success if the value is correct
  const handleNumberInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value ? setOrderNumSuccess(true) : setOrderNumSuccess(false);
  };

  // Update Input Provider style to success if the value is correct
  const handleProviderInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value ? setProviderSuccess(true) : setProviderSuccess(false);
  };

  // Update Input Date style to success if the value is correct
  const handleDateInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value ? setDateSuccess(true) : setDateSuccess(false);
  };

  React.useEffect(() => {
    setStateSuccess(isReadyOrderStateToSubmit());
    refreshAllInputStyleOnLoad();
  }, [handleProductState]);

  return (
    <HeaderComponent
      handleSubmit={handleSubmit}
      totalCost={totalCost}
      orderState={orderState}
      stateSuccess={stateSuccess}
      orderNumSuccess={orderNumSuccess}
      providerSuccess={providerSuccess}
      dateSuccess={dateSuccess}
      formData={formData}
      handleProviderInputStyle={handleProviderInputStyle}
      handleNumberInputStyle={handleNumberInputStyle}
      handleDateInputStyle={handleDateInputStyle}
    />
  );
};
