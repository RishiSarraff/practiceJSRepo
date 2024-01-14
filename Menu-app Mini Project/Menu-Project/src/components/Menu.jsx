import { useState } from "react";
import {Meals} from "./Meals.jsx";
import {Bag} from "./Bag.jsx";

export const Menu = ({ menu }) => {
  const [showOnlyVeg, setShowOnlyVeg] = useState(false); // showonly veg keep track of if we are showing or not shwoing vegetarian.
  // we start off show only veg with false as default since we want to show everything first.

  return (
     // Here if show only veg is false, create a specific button
     // that buttonwhen we click will turn showOnlyVeg to the opposite, so false, which immedietely goes to the other button 
     // Do the same for the opposite, but keep the !showOnlyVeg the same since we want to switch !showOnlyVeg to showOnlyVeg when !showOnlyVeh becomes false.
    <div>
      <h1>Chateau de Rishi Menu</h1>

      
      {showOnlyVeg && 
            (<button onClick = {() => setShowOnlyVeg(false)}> 
            Show All</button>)} 

      {!showOnlyVeg && 
            (<button onClick = {()=> setShowOnlyVeg(true)}>
            Show Only Vegetarian</button>)}

       <hr />

       {Object.keys(menu).map((mealName)=> (
        <h2>
            <Meals 
                name={mealName} 
                items={menu[mealName]} 
                onlyVeg={showOnlyVeg}
            /> 
            
            <hr />

        </h2>
        
       ))}
       <h2>
        <Bag /> 
       </h2>

        

    </div>
  );
};
