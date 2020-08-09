import { ProductEntityApi } from "./mock-data.model";

const productListApi: ProductEntityApi[] = [
  {
    id: "P463",
    title: "Recambios impresión",
    cost: "243.60",
  },
  {
    id: "P390",
    title: "Reactivos maquinaria",
    cost: "1200",
  },
  {
    id: "P422",
    title: "Soportes plataforma",
    cost: "150",
  },
  {
    id: "P321",
    title: "Material de oficina",
    cost: "67.80",
  },
];

export const getProductListApi = (): Promise<ProductEntityApi[]> =>
  Promise.resolve(productListApi);
