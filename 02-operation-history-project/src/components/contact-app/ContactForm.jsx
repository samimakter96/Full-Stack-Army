import { useState } from "react";

const CONTACT_FROM_INIT_STATE = {
  name: "",
  email: "",
  group: "",
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FROM_INIT_STATE });
  const { name, email, group } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContact(values);

    // clear input fields
    setValues({ ...CONTACT_FROM_INIT_STATE });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="group">Group</label>
        <select name="group" id="group" value={group} onChange={handleChange}>
          <option value="">Select group</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <input type="submit" value={"Create New Contact"} />
    </form>
  );
};

export default ContactForm;
