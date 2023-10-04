//import { addToCart, tp, totalQuantity as tq } from "./shoppingCart.js";
//import * as ShoppingCart from "./shoppingCart.js";
/*import newName from "./shoppingCart.js";

console.log('Importing Module');
//addToCart(5, 'bread');
//console.log(tp, tq)

//ShoppingCart.addToCart(3,'pan');
//console.log(ShoppingCart.tp)

newName(4, 'coke')/*/
/*
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json();

console.log(data)*/;
/*
const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data);

    return{title: data.at(-1).title, text: data.at(-1)}
}

const lastPost = getLastPost();

lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2)*/
/*
const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        cart.push([product, quantity]);
        console.log(`${quantity} ${product} added to cart`)
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

console.log(shoppingCart2.totalPrice)*/

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';


const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5}
    ],
    user: {loggedIn: true}
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept()
}