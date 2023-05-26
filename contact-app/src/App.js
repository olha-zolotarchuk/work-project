import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuid } from "uuid";
// import { Route, Switch, Router } from "react-router-dom";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandle = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandle = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList );
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      {/* <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandle}
              />
            )}
          ></Route>
          <Route
            path="/add"
            component={() => <AddContact addContactHandle={addContactHandle} />}
          ></Route>
        </Switch>
      </Router> */}

      <Header />
      <AddContact addContactHandle={addContactHandle} />
      <ContactList contacts={contacts} getContactId={removeContactHandle} />
    </div>
  );
};

export default App;
