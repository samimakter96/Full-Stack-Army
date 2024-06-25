import { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // search functionality
  const searchCB = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  // filter functionality
  let filteredContacts = [];
  if (filter === "All") {
    filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }

  // let filteredContacts =
  //   filter === "All"
  //     ? contacts
  //     : contacts.reduce((acc, curr) => {
  //         if (
  //           (curr.group === filter && curr.name.includes(searchTerm)) ||
  //           curr.email.includes(searchTerm)
  //         ) {
  //           acc.push(curr);
  //         }
  //         return acc;
  //       }, []);

  // if (searchTerm) {
  //   filteredContacts = filteredContacts.filter(
  //     (contact) =>
  //       contact.name.includes(searchTerm) || contact.email.includes(searchTerm)
  //   );
  // }

  return (
    <>
      <div>
        <br />
        Filters:
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          type="search"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
