import { create } from "zustand";

export interface Product {   // ✅ export this interface
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  img: string;
}

interface ProductStore {
  products: Product[];
}

export const useProductStore = create<ProductStore>(() => ({
  products: [
   {
      id: 1,
      name: "Car Jack",
      description: "Hydraulic car jack for lifting vehicles safely",
      quantity: 10,
      price: 79.99,
      img: "https://m.media-amazon.com/images/I/61FNFOpoRJL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      name: "Socket Set",
      description: "Complete socket set with ratchet handles",
      quantity: 15,
      price: 49.99,
      img: "https://m.media-amazon.com/images/I/61Wt49VTo-S._AC_SL1001_.jpg"
    },
    {
      id: 3,
      name: "Torque Wrench",
      description: "Adjustable torque wrench for accurate tightening",
      quantity: 8,
      price: 59.99,
      img: "https://mechanicalbooster.com/wp-content/uploads/2024/04/what-is-a-torque-Wrench.jpg"
    },
    {
      id: 4,
      name: "Car Battery Charger",
      description: "Portable car battery charger with fast charge mode",
      quantity: 12,
      price: 89.99,
      img: "https://m.media-amazon.com/images/I/71xxgQE5CgL._AC_SL1500_.jpg"
    },
    {
      id: 5,
      name: "OBD2 Scanner",
      description: "Vehicle diagnostic OBD2 scanner with live data",
      quantity: 20,
      price: 39.99,
      img: "https://m.media-amazon.com/images/I/7165rMIRi0L._AC_SL1500_.jpg"
    }
  ],
}));
