import products from "./Products"
export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products);
        }, 500)
    })
}
export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory= (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoryId === categoryId))
        }, 500)
    })
} 
export default customFetch;