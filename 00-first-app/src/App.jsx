import { useState } from 'react';
import TableRow from './component/TableRow';
// import ListItem from './component/ListItem';
// import ProductListItem from './component/ProductListItem';

const productList = [
  {
    id: 1,
    name: 'Keyboard',
    stock: 5,
    price: 1000,
  },
  {
    id: 2,
    name: 'Mouse',
    stock: 10,
    price: 300,
  },
  {
    id: 3,
    name: 'microphone',
    stock: 7,
    price: 500,
  },
];

function App() {
  const [products, setProducts] = useState(
    productList.map((item) => ({ ...item, quantity: 0, total: 0 }))
  );

  const inCrementQuantity = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.stock > product.quantity) {
        product.quantity++;
        product.total = product.quantity * product.price;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const deCrementQuantity = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.stock > product.quantity) {
        product.quantity--;
        product.total = product.quantity * product.price;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const total = products.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stocks</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              {...product}
              inCrementQuantity={inCrementQuantity}
              deCrementQuantity={deCrementQuantity}
            />
          ))}
        </tbody>
      </table>
      {total > 0 && <p>total: {total}</p>}
    </div>
  );
}

export default App;

/* 
When should we  decide creating a new component
1. when we need to write duplicate code
2. which data are different


Component
container
*/
