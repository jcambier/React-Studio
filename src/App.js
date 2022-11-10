import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function updateCart(itemName, price) {
    const tempCartList = cartList;
    tempCartList.push(itemName);
    setCartList(tempCartList);
    setTotalPrice(totalPrice + price);
  }

  return (
    <div className="App">
      <h1 className="bakeryName">My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item </p> // replace with BakeryItem component
        <BakeryItem name={item.name} price={item.price} image={item.image} description={item.description} cartList={cartList} updateCart={updateCart}/>
      ))}

      <div>
        <h2>Cart</h2>
        <div>
          Total Price: {totalPrice}
        </div>
        {/* TODO: render a list of items in the cart */}
        {cartList.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
