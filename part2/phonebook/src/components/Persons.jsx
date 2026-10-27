const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <div>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
            <button
              name={person.name}
              id={person.id}
              onClick={() => handleDelete(person.id, person.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
