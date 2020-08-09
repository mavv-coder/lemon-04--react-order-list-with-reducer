import React from "react";
import { ProductVm, useAppContext } from "../../../core/context";
import { ProductListComponent } from "./product-list.component";

interface Props {
  handleProductCost: (id: string, value: number) => void;
  toggleCheckboxValue: (product: ProductVm) => void;
  handleProductState: (action: boolean) => void;
}

export const ProductListContainer: React.FC<Props> = (props) => {
  const { productList } = useAppContext();
  const { handleProductCost, toggleCheckboxValue, handleProductState } = props;

  React.useEffect(() => {
    // Paints the current State at beginning
    handleProductState(true);
  }, []);

  return (
    <ProductListComponent
      productList={productList}
      handleProductCost={handleProductCost}
      toggleCheckboxValue={toggleCheckboxValue}
      handleProductState={handleProductState}
    />
  );
};
