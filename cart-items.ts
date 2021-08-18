interface Cartitem {
    id: number;
    product: string;
    price: number; 
    quantity: number; 
}

let cart: Cartitem[] = [
    {
        id: 1,
        product: "iPhone",
        price: 1000,
        quantity:1
    },
    {
        id: 1,
        product: "iPhone",
        price: 1000,
        quantity:1
    },
    {
        id: 1,
        product: "iPhone",
        price: 1000,
        quantity:1
    },
    {
        id: 1,
        product: "iPhone",
        price: 1000,
        quantity:1
    },
    {
        id: 1,
        product: "iPhone",
        price: 1000,
        quantity:1
    },

]

export default cart; 

export {Cartitem}; 