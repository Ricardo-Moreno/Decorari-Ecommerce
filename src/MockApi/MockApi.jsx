

export const itemList = [
    {
        id: 1,
        category:'boxAniversario',
        title: 'Brothers Birthday',
        image: 'https://i.ibb.co/WyjCjZt/arreglo-Cinco.jpg',
        text: 'Perfecto para Regalar a tu hermano favorito',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 2,
        category:'boxCumpleaños',
        title: 'Black and White',
        image: 'https://i.ibb.co/zs5Cfgh/arreglo-Cuatro.jpg',
        text: 'Un arreglo muy elegante para una ocasión muy especial',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 3,
        category:'boxAniversario',
        title: 'titulo tres',
        image: 'https://i.ibb.co/gPCFfNq/arreglo-Dos.jpg',
        text: 'este es el arreglo 3',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 4,
        category:'boxCumpleaños',
        title: 'titulo tres',
        image: 'https://i.ibb.co/VBf9ctJ/arreglo-Nueve.jpg',
        text: 'este es el arreglo 4',
        stock: 0,
        initial: 0,
        price: 5000
    }
]

export const getSingleProduct = (idItem) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            const itemListFind = idItem ? itemList.find( item => item.id === parseInt(idItem)) : itemList
            resolve ( itemListFind )
        }, 1500);
    })
}

 export const getFetch = (id) => {
    return new Promise((resolve)=>{
    setTimeout(()=>{
        const itemListCategory = id ? itemList.find( item => item.id === id ) : itemList
            resolve ( itemListCategory )
    }, 2000)
})
}
