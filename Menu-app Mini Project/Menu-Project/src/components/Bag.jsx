import { MealTemplate } from "./MealTemplate";

export const Bag = ({ addedToBag, item, priceOfItem}) => {
 
   if(addedToBag) {
    return (
    
      <div>
        <h3>
          {" "}
          {item[0].toUpperCase() + item.slice(1)} (${priceOfItem})
          
        </h3>
      </div>

    );
  }

  return (
    <>
      <h1> Bag </h1>
    </>
  );
};