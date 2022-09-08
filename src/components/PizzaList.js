import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzaAry, onClickEdit }) {
  const pizzaListings = pizzaAry.map(pizza => {
    return (
      <Pizza key={pizza.id} pizza={pizza} onClickEdit={onClickEdit} />
    )
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaListings}
      </tbody>
    </table>
  );
}

export default PizzaList;
