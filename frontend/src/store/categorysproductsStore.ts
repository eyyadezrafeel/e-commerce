import {create} from 'zustand';

export interface CategoryProduct {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    img: string;
    category: string;
    subcategory: string;
}

interface CategorysProductsStore {
    categorysproducts: CategoryProduct[];
}

export const useCategorysProductsStore = create<CategorysProductsStore>(() => ({
    categorysproducts:[
        {
            id:1,
            name: "Car Jack",
            description: "Hydraulic car jack for lifting vehicles safely",
            quantity: 10,
            price: 79.99,
            img: "https://m.media-amazon.com/images/I/61FNFOpoRJL._AC_SL1500_.jpg",
            category: "Tools",
            subcategory: "Car Jack",


        },
        {
            id:2,
            name: "Socket Set",
            description: "Complete socket set with ratchet handles",
            quantity: 15,
            price: 49.99,
            img: "https://m.media-amazon.com/images/I/61Wt49VTo-S._AC_SL1001_.jpg",
            category: "Tools",
            subcategory: "Wrench",


        },
        {
            id:3,
            name: "Torque Wrench",
            description: "Adjustable torque wrench for accurate tightening",
            quantity: 8,
            price: 59.99,
            img: "https://mechanicalbooster.com/wp-content/uploads/2024/04/what-is-a-torque-Wrench.jpg",
            category: "Tools",
            subcategory: "Wrench",
        },
        {
            id:4,
            name: "Car Battery Charger",
            description: "Portable car battery charger with fast charge mode",
            quantity: 12,
            price: 89.99,
            img: "https://m.media-amazon.com/images/I/71xxgQE5CgL._AC_SL1500_.jpg",
            category: "Electronics",
            subcategory: "Car Charger",
        },
        {
            id:5,
            name: "XANON",
            description:"High-performance automotive light with advanced xenon technology for maximum road visibility and energy efficiency.",
            quantity: 20,
            price: 39.99,
            img: "data:image/jpeg;base64,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",
            category: "Electronics",
            subcategory: "Lights",



        }




    ]}));