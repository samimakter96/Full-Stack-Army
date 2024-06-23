// import { useState } from 'react';
// import './App.css';
// import DynamicForm from './components/DynamicForm';
// import JsonComponent from './components/JsonComponent';

import App2 from "./App2";

function App() {
  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   phone: '',
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  // const handleChange = (event) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">What is your name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />

          <label htmlFor="">What is your email</label>
          <input
            type="email"
            placeholder="test@gmail.com"
            value={formState.email}
            name="email"
            onChange={handleChange}
          />

          <label htmlFor="">What is your phone</label>
          <input
            type="tel"
            placeholder="893383994"
            value={formState.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form> */}

      {/* <DynamicForm /> */}

      {/* <JsonComponent /> */}

      <App2 />

    </>
  );
}

export default App;
