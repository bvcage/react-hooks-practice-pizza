import React from "react";

function Pizza({ pizza, onClickEdit }) {
  const { id, topping, size, vegetarian } = pizza;
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? 'Yes' : 'No'}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onClickEdit(pizza)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
