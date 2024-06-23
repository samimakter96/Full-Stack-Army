import { useState } from 'react';

const formField = {
  name: {
    label: 'What is your name',
    type: 'text',
    placeholder: 'John Doe',
  },
  email: {
    type: 'email',
    label: 'Email address',
    placeholder: 'test@gmail.com',
  },
  phone: {
    type: 'tel',
    label: 'What is your phone number',
    placeholder: '837384939',
  },
  password: {
    type: 'password',
    label: 'What is your password',
    placeholder: '*****',
  },
  birth: {
    type: 'date',
    label: 'What is your date of birth',
    placeholder: 'YYYY-MM-DD',
  },
};

// step 1: transform the object as our need
// adding value property
const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = {
      ...obj[curr],
      value: '',
    };
    return acc;
  }, {});
};

const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const DynamicForm = () => {
  const [formState, setFormState] = useState(transformObject(formField));
  const formData = mapObjectToArray(formState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = Object.keys(formState).reduce((acc, curr) => {

      acc[curr] = formState[curr].value
      return acc
    }, {})

    console.log(values);
  };

  
  const handleChange = (event) => {
    setFormState({
     ...formState,
      [event.target.name]: {
        ...formState[event.target.name],
        value: event.target.value,
      },
    });
  }

  return (
    <>
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div key={index}>
            <label>{item.label}</label>
            <input
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default DynamicForm;
