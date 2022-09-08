import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzaAry, setPizzaAry] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then(r => r.json())
    .then(data => setPizzaAry(data));
  }, []);

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzaAry={pizzaAry} />
    </>
  );
}

export default App;
