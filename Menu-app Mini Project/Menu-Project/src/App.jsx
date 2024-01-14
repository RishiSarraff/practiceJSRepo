import { useState } from 'react'
import { Menu } from './components/Menu.jsx'
import { Meals } from "./components/Meals.jsx"
import { MealTemplate } from "./components/MealTemplate.jsx"
import { Bag } from "./components/Bag.jsx"
import './App.css'


function App() {
  const fullMenu = {"Breakfast": [
    {"food": "pancakes", "price": 5.00, "vegetarian": true, "description":  "Fluffy and golden pancakes served with your choice of syrup or toppings."},
    {"food": "waffles", "price": 5.00, "vegetarian": true, "description":  "Crispy on the outside, soft on the inside waffles, perfect with syrup, whipped cream, and fresh fruits."},
    {"food": "orange juice", "price": 2.00, "vegetarian": true, "description":  "Freshly squeezed orange juice, a refreshing and vitamin-packed beverage to start your day."}
  ],
  "Lunch": [
    {"food": "turkey sandwich", "price": 8.00, "vegetarian": false, "description":  "A classic turkey sandwich with savory slices of turkey, fresh vegetables, and your choice of condiments."},
    {"food": "grilled cheese", "price": 6.00, "vegetarian": true, "description":  "Melted cheese between slices of golden-brown bread, a simple and satisfying grilled cheese sandwich."},
    {"food": "hamburger", "price": 8.00, "vegetarian": false, "description":  "Juicy hamburger patty on a soft bun, topped with fresh lettuce, tomato, and your choice of condiments."}
  ],
  "Dinner": [
    {"food": "chicken alfredo", "price": 10.00, "vegetarian": false, "description":  "Creamy fettuccine Alfredo with tender chunks of chicken, a rich and indulgent pasta dish."},
    {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true, "description":  "A flavorful stir-fry with tofu, crisp vegetables, and savory sauce, served over steamed rice."},
    {"food": "chili", "price": 8.00, "vegetarian": false, "description":  "Hearty and spicy chili with a mix of ground meat, beans, and spices, a comforting choice for a satisfying dinner."}
  ]
  }

  return (
    <>
    <Menu menu={fullMenu}/>
    </>
  )
}

export default App
