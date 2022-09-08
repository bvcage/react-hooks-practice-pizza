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
    if (pizza.id) {

    } else {

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
