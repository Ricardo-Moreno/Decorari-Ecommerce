import  arregloUno  from '../components/assets/arregloUno.jpeg';
import arregloDos from '../components/assets/arregloDos.jpeg';
import arregloTres from '../components/assets/arregloTres.jpeg';
import arregloCuatro from '../components/assets/arregloCuatro.jpeg';


export const itemList = [
    {
        id: 1,
        title: 'title uno',
        image: arregloUno,
        text: 'este es el arreglo 1',
        stock: 5,
        initial: 1
    },
    {
        id: 2,
        title: 'titulo dos',
        image: arregloDos,
        stock: 5,
        initial: 1
    },
    {
        id: 3,
        title: 'titulo tres',
        image: arregloTres,
        text: 'este es el arreglo 3',
        stock: 5,
        initial: 1
    },
    {
        id: 4,
        title: 'titulo tres',
        image: arregloCuatro,
        text: 'este es el arreglo 4',
        stock: 0,
        initial: 0
    }
]

export function getSingleItem(idItem){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let itemListFind = itemList.find( item => item.id === idItem)
            if (itemListFind)
            resolve(itemListFind);
            else
            reject(new Error('Item no encontrado') )
        }, 1500);
    });
}