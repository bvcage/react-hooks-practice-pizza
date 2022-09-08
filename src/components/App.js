import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const initPizza = {
    topping: '',
    size: '',
    vegetarial: '',
  }

  const [pizzaAry, setPizzaAry] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState(initPizza);

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then(r => r.json())
    .then(data => setPizzaAry(data));
  }, []);

  function editPizza (pizza) {
    setPizzaToEdit(pizza);
  }

  function submitPizza (pizza) {

    // patch existing pizza
    if (pizza.id) {
      fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pizza),
      })
      .then(r => r.json())
      .then(patch => {
        const fixAry = pizzaAry.map(pizza => {
          if (pizza.id === patch.id) return patch;
          else return pizza;
        })
        setPizzaAry(fixAry);
        setPizzaToEdit(initPizza);
      });
    }
    
    // else post new pizza
    else {
      fetch(`http://localhost:3001/pizzas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pizza),
      })
      .then(r => r.json())
      .then(post => {
        setPizzaAry([...pizzaAry, post]);
        setPizzaToEdit(initPizza);
      })
    };
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaToEdit={pizzaToEdit} submitPizza={submitPizza} />
      <PizzaList pizzaAry={pizzaAry} onClickEdit={editPizza} />
    </>
  );
}

export default App;
