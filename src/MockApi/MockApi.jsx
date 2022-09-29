import  arregloUno  from '../components/assets/arregloUno.jpeg';
import arregloDos from '../components/assets/arregloDos.jpeg';
import arregloTres from '../components/assets/arregloTres.jpeg';
import arregloCuatro from '../components/assets/arregloCuatro.jpeg';
import arregloCinco from '../components/assets/arregloCinco.jpeg';
import arregloSeis from '../components/assets/arregloSeis.jpeg';
import arregloSiete from '../components/assets/arregloSiete.jpeg';
import arregloOcho from '../components/assets/arregloOcho.jpeg';



export const itemList = [
    {
        id: 1,
        category:'boxAniversario',
        title: 'Brothers Birthday',
        image: arregloUno,
        text: 'Perfecto para Regalar a tu hermano favorito',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 2,
        category:'boxCumpleaños',
        title: 'Black and White',
        image: arregloDos,
        text: 'Un arreglo muy elegante para una ocasión muy especial',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 3,
        category:'boxAniversario',
        title: 'titulo tres',
        image: arregloTres,
        text: 'este es el arreglo 3',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 4,
        category:'boxCumpleaños',
        title: 'titulo tres',
        image: arregloCuatro,
        text: 'este es el arreglo 4',
        stock: 0,
        initial: 0,
        price: 5000
    },
    {
        id: 5,
        category:'boxAniversario',
        title: 'Brothers Birthday',
        image: arregloCinco,
        text: 'Perfecto para Regalar a tu hermano favorito',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 6,
        category:'boxCumpleaños',
        title: 'Black and White',
        image: arregloSeis,
        text: 'Un arreglo muy elegante para una ocasión muy especial',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 7,
        category:'boxAniversario',
        title: 'titulo tres',
        image: arregloSiete,
        text: 'este es el arreglo 3',
        stock: 5,
        initial: 1,
        price: 5000
    },
    {
        id: 8,
        category:'boxCumpleaños',
        title: 'titulo tres',
        image: arregloOcho,
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
