import React, { useEffect, useState } from "react";

function PizzaForm({ pizzaToEdit, submitPizza }) {

  const [formPizza, setFormPizza] = useState({...pizzaToEdit});

  useEffect(() => {
    setFormPizza({...pizzaToEdit})
  }, [pizzaToEdit]);

  function handleChange (event) {
    const inputKey = event.target.name;
    let inputValue = event.target.value;

    if (inputKey === 'vegetarian') {
      if (inputValue === 'Vegetarian') inputValue = true;
      else inputValue = false;
    }

    setFormPizza({...formPizza,
      [inputKey]: inputValue
    })
  }

  function handleSubmit (event) {
    event.preventDefault();
    submitPizza(formPizza);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formPizza.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formPizza.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={formPizza.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!formPizza.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
