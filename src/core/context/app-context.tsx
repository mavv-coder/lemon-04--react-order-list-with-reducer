import React from "react";
import { getProductListApi } from "../../api";
import { mapProductListFromApiToVm } from "./app-context.mapper";
import { Context, ProductVm, FormData } from "./app-context.model";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider: React.FC = (props) => {
  const [productList, setProductList] = React.useState<ProductVm[]>([]);
  const [totalCost, setTotalCost] = React.useState<number>(0);
  const [formData, setFormData] = React.useState<FormData>({
    orderNum: "",
    provider: "",
    date: "",
  });

  // Calculates total cost of the order using all cost properties
  const calculateOrderTotalCost = (list: ProductVm[]): number =>
    list.reduce((acc, product) => (acc += product.cost), 0);

  // Sets the totalCost State using the new list
  const updateOrderTotalCost = (list: ProductVm[]): void =>
    setTotalCost(calculateOrderTotalCost(list));

  // Loads the product list from api and update total cost at the beginning
  const onLoadProductList = (): void => {
    getProductListApi()
      .then((data) => mapProductListFromApiToVm(data))
      .then((data) => {
        setProductList(data);
        updateOrderTotalCost(data);
      });
  };

  React.useEffect(() => {
    onLoadProductList();
  }, []);

  return (
    <AppContext.Provider
      value={{
        productList,
        setProductList,
        formData,
        setFormData,
        totalCost,
        updateOrderTotalCost,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): Context => {
  const context = React.useContext(AppContext);
  return context;
};
