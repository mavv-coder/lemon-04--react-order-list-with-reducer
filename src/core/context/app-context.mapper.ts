import { ProductEntityApi } from "../../api";
import { ProductVm } from "./app-context.model";

const mapProductFromApiToVm = (product: ProductEntityApi): ProductVm => ({
  id: product.id,
  description: product.title,
  cost: parseFloat(product.cost),
  state: false,
  checked: false,
});

export const mapProductListFromApiToVm = (
  productList: ProductEntityApi[]
): ProductVm[] => productList.map((x) => mapProductFromApiToVm(x));
