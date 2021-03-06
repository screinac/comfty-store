import { getElement } from '../utils.js'
import display from '../displayProducts.js'
const setupSearch = (store) => {
  const form = getElement('.input-form')
  const nameInput = getElement('.search-input')
  form.addEventListener('keyup', () => {
    const value = nameInput.value.toLowerCase()
    if (value) {
      const filteredStore = store.filter((product) => {
        let { name } = product
        name = name.toLowerCase()

        if (name.startsWith(value)) {
          return product
        }
      })
      display(filteredStore, getElement('.products-container'), true)
      if (filteredStore.length < 1) {
        const products = getElement('.products-container')
        products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`
      }
    } else {
      display(store, getElement('.products-container'), true)
    }
  })
}

export default setupSearch
