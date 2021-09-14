import { getElement } from '../utils.js'

const cartOveraly = getElement('.cart-overlay')
const closeCartBtn = getElement('.cart-close')
const toggleCartBtn = getElement('.toggle-cart')

toggleCartBtn.addEventListener('click', () => {
  cartOveraly.classList.add('show')
})
closeCartBtn.addEventListener('click', () => {
  cartOveraly.classList.remove('show')
})

export const openCart = () => {
  cartOveraly.classList.add('show')
}
