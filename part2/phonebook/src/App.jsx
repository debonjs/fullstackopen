import { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phoneService from "./services/phonebook";

function App() {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    phoneService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  useEffect(() => {
    if (searchQuery.length > 2) {
      const results = persons.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredPersons(results);
    } else {
      setFilteredPersons(persons);
    }
  }, [persons, searchQuery]);

  const handleName = (event) => setNewName(event.target.value);

  const handlePhoneNumber = (event) => setNewPhoneNumber(event.target.value);

  const handleFilter = (event) => setSearchQuery(event.target.value);

  const handleNewName = (event) => {
    event.preventDefault();
    const personIsAlreadyExisted = persons.find(
      (person) => person.name === newName,
    );
    const phoneNumberIsAlreadyExisted = persons.find(
      (person) => person.number === newPhoneNumber,
    );

    if (newName.length === 0 || newPhoneNumber.length === 0) {
      return;
    }

    if (personIsAlreadyExisted) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const mewPersonPhoneObject = {
          ...personIsAlreadyExisted,
          number: newPhoneNumber,
        };
        phoneService
          .update(personIsAlreadyExisted.id, mewPersonPhoneObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personIsAlreadyExisted.id
                  ? person
                  : returnedPerson,
              ),
            );
          });
        setNewName("");
        setNewPhoneNumber("");
        return;
      }
    }
    if (phoneNumberIsAlreadyExisted) {
      return alert(`${newPhoneNumber} is already added to phonebook`);
    }

    const personObject = {
      name: newName,
      number: newPhoneNumber,
    };
    phoneService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewPhoneNumber("");
    });
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      phoneService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter searchQuery={searchQuery} handleFilter={handleFilter} />
      <br />

      <PersonForm
        handleNewName={handleNewName}
        newName={newName}
        handleName={handleName}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumber={handlePhoneNumber}
      />

      <br />
      <h2>Numbers</h2>
      <Persons
        personsToShow={filteredPersons}
        searchQuery={searchQuery}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
