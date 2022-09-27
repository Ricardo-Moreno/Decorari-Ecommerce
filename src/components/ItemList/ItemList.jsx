import Item from '../Item/Item';
import './ItemList.scss';

function ItemList({data}) {
return (
    
    <div className='container d-flex justify-content-center h-100 align-items-center '>
        <div className='row'>
            { data.map((itemList) => <div className='col-md-3' key={ItemList.id}>
                <Item
                title={itemList.title}
                imageSource={itemList.image}
                text={itemList.text}
                initial={itemList.initial}
                stock={itemList.stock}
                />
            </div>)
            }
        </div>
    </div>
)
}

export default ItemList