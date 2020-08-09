export interface ProductVm {
  id: string;
  description: string;
  cost: number;
  state: boolean;
  checked: boolean;
}

export interface FormData {
  orderNum: string;
  provider: string;
  date: string;
}

export interface Context {
  productList: ProductVm[];
  setProductList: (list: ProductVm[]) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  totalCost: number;
  updateOrderTotalCost: (list: ProductVm[]) => void;
}
