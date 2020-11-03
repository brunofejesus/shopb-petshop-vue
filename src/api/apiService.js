import axios from 'axios'

const URL_API = 'http://localhost:3000'
const instanceAxios = axios.create({
  baseURL: URL_API,
  timeout: 5000
})

let allProducts = []

async function getAllProducts() {
  try {
    const { data } = await instanceAxios.get('/produtos')
    allProducts = [...data]
    return allProducts
  } catch (e) {
    console.error(e)
  }
}

async function getProductById(id) {
  const idStr = id.toLowerCase()

  const cachedProduct = allProducts.find(product => product.id === idStr)
  if (cachedProduct) {
    return { ...cachedProduct }
  }

  const { data } = await instanceAxios.get(`/produtos/${id}`)
  allProducts.push(data)
  return { ...data }
}

export { getAllProducts, getProductById }
