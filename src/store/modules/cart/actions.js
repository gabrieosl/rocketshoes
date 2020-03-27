export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function incrementItem(id) {
  return { type: '@cart/INCREMENT', id };
}

export function decrementItem(id) {
  return { type: '@cart/DECREMENT', id };
}
