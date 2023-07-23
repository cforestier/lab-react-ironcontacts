import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";
const firstContacts = contacts.slice(0, 5);

function App() {
  const [firstFiveContacts, setFirstFiveContacts] = useState(firstContacts);
  // const [allContacts, setAllContacts] = useState(firstContacts);
  const randomNumberMinimumFive = () =>
    Math.floor(Math.random() * (contacts.length + 1 - 5) + 5);
  const selectRandomContact = () => {
    let randomContact = contacts[randomNumberMinimumFive()];
    let newListOfContacts = [...firstFiveContacts];
    newListOfContacts.push(randomContact);
    setFirstFiveContacts(newListOfContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...firstFiveContacts];
    sortedContacts.sort((a, b) => b.popularity - a.popularity);
    setFirstFiveContacts(sortedContacts);
  };
  const sortByName = () => {
    const sortedContactsByName = [...firstFiveContacts];
    sortedContactsByName.sort((a, b) => a.name.localeCompare(b.name));
    setFirstFiveContacts(sortedContactsByName);
  };

  const deleteFunction = (contactId) => {
    const filteredContacts = firstFiveContacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setFirstFiveContacts(filteredContacts);
  };
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="5">IronContacts</th>
          </tr>
          <tr>
            <th colSpan="2">
              <button onClick={selectRandomContact}>Add Random Contact</button>
            </th>
            <th colSpan="2">
              <button onClick={sortByPopularity}>Sort by popularity</button>
            </th>
            <th colSpan="1">
              <button onClick={sortByName}>Sort by name</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar</td>
            <td>Won an Emmy</td>
            <td>Actions</td>
          </tr>
          {firstFiveContacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={`photoshoot of ${contact.name}`}
                    style={{ width: "100px", height: "150px" }}
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  {
                    <button onClick={() => deleteFunction(contact.id)}>
                      Delete
                    </button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
