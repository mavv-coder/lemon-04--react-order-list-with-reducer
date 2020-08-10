import React from "react";
import { useAppContext, ProductVm } from "../../core/context";
import { OrderDetailComponent } from "./order-detail.component";
import { orderStateReducer, actionIds } from "./order-detail.reducer";

export const OrderDetailContainer: React.FC = () => {
  const { productList, setProductList, updateOrderTotalCost } = useAppContext();
  const [orderState, dispatch] = React.useReducer(orderStateReducer, 0);

  // Updates the cost property of the products whose input value has been modified
  // Then sets the ProductList State with the updated product
  const handleProductCost = (id: string, value: number): void => {
    if (isNaN(value)) value = 0;
    const newList = productList.map((x) =>
      x.id === id ? { ...x, cost: value } : x
    );
    updateOrderTotalCost(newList);
    setProductList(newList);
  };

  // Looks for the product in the list and toggle property checked
  // Then sets the ProductList State with the updated product
  const toggleCheckboxValue = (product: ProductVm): void => {
    const newList = productList.map((x) =>
      x.id === product.id ? { ...x, checked: !x.checked } : x
    );
    setProductList(newList);
  };

  // Cleans check property from products after clicking validate/invalidate btns
  const cleanCheckedProperty = (list: ProductVm[]): ProductVm[] =>
    list.map((x) => ({ ...x, checked: false }));

  // Changes state property depend on checked property value
  // Then sets the ProductList State with the updated product
  // Then calculates the OrderState with the updated product
  const handleProductValidate = (action: boolean): void => {
    let newList = [];
    action
      ? (newList = productList.map((x) =>
          x.checked ? { ...x, state: true } : x
        ))
      : (newList = productList.map((x) =>
          x.checked ? { ...x, state: false } : x
        ));
    newList = cleanCheckedProperty(newList);
    setProductList(newList);
    calculateOrderState(newList);
  };

  // Converts the OrderState to percentage
  const getOrderStatePercentage = (value: number): number =>
    value === 0 ? 0 : (value * 100) / productList.length;

  // Calculates the OrderState using state property from products
  const calculateOrderState = (list: ProductVm[]): void => {
    const newOrderState = list.reduce((acc, x) => {
      if (x.state) acc++;
      return acc;
    }, 0);
    const percentage = getOrderStatePercentage(newOrderState);
    dispatch({ type: actionIds.setOrderState, payload: percentage });
  };

  return (
    <OrderDetailComponent
      handleProductCost={handleProductCost}
      toggleCheckboxValue={toggleCheckboxValue}
      handleProductValidate={handleProductValidate}
      orderState={orderState}
    />
  );
};
