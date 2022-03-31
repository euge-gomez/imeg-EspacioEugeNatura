import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity + " productos.")
    }

    return(
        <div> {greeting} 
        <br/>
        <ItemCount stock={4} initial={1} onAdd={onAdd}/>
        </div>
    );
}
export default ItemListContainer;