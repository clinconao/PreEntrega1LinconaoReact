const products = [
    {
        id: '1', 
        name: 'Producto 1', 
        category: 'album', 
        price: 1000, 
        stock: 500, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
        imageUrl: '/assets/photo01.jpg'
    },

    {
        id: '2', 
        name: 'Producto 2', 
        category: 'photocard', 
        price: 1000, 
        stock: 500, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
        imageUrl: '/assets/photo02.jpg'
    },

    {
        id: '3', 
        name: 'Producto 3', 
        category: 'photobook', 
        price: 1000, 
        stock: 500, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
        imageUrl: '/assets/photo03.jpg'
    },

    {
        id: '4', 
        name: 'Producto 4', 
        category: 'papeleria', 
        price: 1000, 
        stock: 500, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
        imageUrl: '/assets/photo04.jpg'
    },

    {
        id: '5', 
        name: 'Producto 5', 
        category: 'accesorios', 
        price: 1000, 
        stock: 500, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
        imageUrl: '/assets/photo05.jpg'
    },

    {
        id: '6', 
        name: 'Producto 6', 
        category: 'kfood', 
        price: 1000, 
        stock: 500, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
        imageUrl: '/assets/photo06.jpg'
    },

    {
        id: '7', 
        name: 'Producto 7', 
        category: 'fanmode', 
        price: 1000, 
        stock: 500, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
        imageUrl: '/assets/photo07.jpg'
    },

]
export const mFetch = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(id ? products.find(prod => prod.id === id) :products)
        },1000)
    })
}

export const mFetchOne = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id ===id))
        }, 500)
    })
}
