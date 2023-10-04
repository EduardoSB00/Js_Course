console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

const addToCart = function(product, quantity) {
    cart.push([product, quantity]);
    console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 345;
const totalQuantity = 34;

export {addToCart, totalPrice as tp, totalQuantity}

export default addToCart;