
import Card from '../Card/Card';
import  arregloUno  from '../assets/arregloUno.jpeg';
import arregloDos from '../assets/arregloDos.jpeg';
import arregloTres from '../assets/arregloTres.jpeg';
import arregloCuatro from '../assets/arregloCuatro.jpeg';
import './Cards.scss';



function Cards() {

    const cards = [
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





return (
    <div className='container d-flex justify-content-center h-100 align-items-center '>
        <div className='row'>
            {
                cards.map(cards => <div className='col-md-3' key={cards.id}>
                <Card
                title={cards.title}
                imageSource={cards.image}
                text={cards.text}
                initial={cards.initial}
                stock={cards.stock}
                />
            </div>)
            }
        </div>
    </div>
)
}

export default Cards