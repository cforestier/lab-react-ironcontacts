import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";
const firstContacts = contacts.slice(0, 5);

function App() {
  const [firstFiveContacts, setFirstFiveContacts] = useState(firstContacts);
  const randomNumberMinimumFive = () =>
    Math.floor(Math.random() * (contacts.length + 1 - 5) + 5);
  const selectRandomContact = () => {
    let randomContact = contacts[randomNumberMinimumFive()];
    let newListOfContacts = [...firstFiveContacts];
    newListOfContacts.push(randomContact);
    setFirstFiveContacts(newListOfContacts);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="5">IronContacts</th>
          </tr>
          <tr>
            <th colSpan="5">
              <button onClick={selectRandomContact}>Add Random Contact</button>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
