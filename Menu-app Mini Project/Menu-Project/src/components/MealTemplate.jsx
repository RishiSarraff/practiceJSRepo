import { useState } from "react";
import { Bag } from "./Bag";

export const MealTemplate = ({ itemName, price, description}) => {
  const [boughtItem, setBoughtItem] = useState(false);


  return (
    <>
      <h3>
        {" "}
        {itemName[0].toUpperCase() + itemName.slice(1)} (${price})
      </h3>

      {boughtItem && (
        <>
        <button onClick={() => setBoughtItem(false)}>Remove Item</button>
        <Bag addedToBag={true} item={itemName} priceOfItem={price}/>
        </>
      )}

      {!boughtItem && (
        <button onClick={() => setBoughtItem(true)}>Add Item</button>
      )}

      <p> {description}</p>
    </>
  );
};