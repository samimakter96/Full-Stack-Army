import React, { useState } from 'react';

const ProductListItem = ({ productName, stock }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <p>{productName}</p>
      <p>
        {count} / {stock}
      </p>
      <button onClick={decrement} disabled={count === stock}>
        Decrement -
      </button>
      <button onClick={increment} disabled={count === stock}>
        Increment +
      </button>
    </div>
  );
};

export default ProductListItem;
