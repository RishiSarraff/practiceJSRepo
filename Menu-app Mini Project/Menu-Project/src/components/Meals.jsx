import { MealTemplate} from "./MealTemplate.jsx"

export const Meals = ({name, items, onlyVeg}) => {
  
  let itemsToDisplay = items;

  if(onlyVeg){
    itemsToDisplay = items.filter((item) => item.vegetarian === true)
  }

  
  
  return (
    <div>
      <h2> {name}</h2>
      {itemsToDisplay.map((item) => (
        <MealTemplate itemName={item.food} price={item.price} description={item.description}/>
      ))}

    </div>
  );
};
