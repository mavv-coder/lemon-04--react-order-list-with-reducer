import React from "react";
import { useAppContext } from "../../core/context";
import { CheckOutComponent } from "./checkout.component";

export const CheckoutContainer: React.FC = () => {
  const { productList, formData, totalCost } = useAppContext();

  return (
    <CheckOutComponent
      productList={productList}
      formData={formData}
      totalCost={totalCost}
    />
  );
};
