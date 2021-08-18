import express from "express"; 
import cart from "../cart-items";

const route = express.Router(); 

route.get("/cart-items", (req, res) => {
    // let maxPrice = req.query.maxPrice; 
    // let prefix = req.query.prefix; 
    // let pageSize = req.query.pageSize; 

    let {maxPrice, prefix, pageSize} = req.query

    
    let filteredCart = cart; 
    
    if (maxPrice) {
        filteredCart = filteredCart.filter(function(item) {
            return item.price <= Number(maxPrice);
        })
    }

    if (pageSize) {
        filteredCart = filteredCart.slice(0, Number(pageSize));
    }

    if (prefix) {
        filtertedCart = filteredCart.filter(item => item.product)

        }

    res.status(200); 
    res.json(filteredCart);  
})

route.get("/car-items/:id", (req, res) => {
    let id: number = Number(req.params.id);

    let foundItem = cart.find(item => item.id === id)

    if (foundItem) {
        res.json(200); 
        res.json(foundItem); 
    } else {
        res.status(404); 
        res.json(`ID ${id} Not Found`)
    }
})

//3 
let uniqueId = cart.length + 1; // 6 
route.post("/cart-items", (req,res) => {
    const newItem = req.body; 
    newItem.id = uniqueId; 
    uniqueId++; 
    cart.push(newItem); 
    //cart.push({id:88, product: "whatever", price: 9999, quantity: 50})
    res.status(201); 
    res.json(newItem); 
})

// 4

route.put("/cart-items/:id", (req, res) => {
    let newItem = req.body; 
    let id: number = Number(req.params.id); 

    let foundIndex = cart.findIndex(item => item.id === id)

    cart[foundIndex] = newItem; 
    res.status(200); 
    res.json(newItem); 
})

//5 

route.delete("/cart-items/:id", (req, res) => {
    let id: number = Number(req.params.id); 
    
   let foundIndex = cart.findIndex(item => item.id === id)

   res.json(cart.splice(foundIndex, 1)); 

   res.sendStatus(204); 
})

export default route; 


