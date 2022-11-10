// TODO: create a component that displays a single bakery item
import "../App.css";

export default function BakeryItem(props) {

    const cartList = props.cartList;
    const name = props.name;
    const image = props.image;
    const description = props.description;
    const price = props.price;

    const handleClick = () => {
        props.updateCart(name, price);
    }

    return (
        <div className="container">
            <h2>{name}</h2>
            <img src={image}></img>
            <p>{price}</p>
            <p>Description: {description}</p>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    );
}