import React from "react";
import { ProductVm } from "../../core/context";
import { HeadingContainer } from "../../layout/components/heading";
import { HeaderContainer } from "../../layout/components/header";
import { ProductListContainer } from "../../layout/components/product-list";

interface Props {
  handleProductCost: (id: string, value: number) => void;
  toggleCheckboxValue: (product: ProductVm) => void;
  handleProductValidate: (action: boolean) => void;
  orderState: number;
}

export const OrderDetailComponent: React.FC<Props> = (props) => {
  const {
    handleProductCost,
    toggleCheckboxValue,
    handleProductValidate,
    orderState,
  } = props;

  return (
    <>
      <HeadingContainer title="Pedido a proveedor" />
      <HeaderContainer
        orderState={orderState}
        handleProductValidate={handleProductValidate}
      />
      <ProductListContainer
        handleProductCost={handleProductCost}
        toggleCheckboxValue={toggleCheckboxValue}
        handleProductValidate={handleProductValidate}
      />
    </>
  );
};
