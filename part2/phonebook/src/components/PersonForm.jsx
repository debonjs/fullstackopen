const PersonForm = ({handleNewName, newName, handleName, newPhoneNumber, handlePhoneNumber}) => {
  return (
    <form onSubmit={handleNewName}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={newName}
          placeholder="write a new name"
          onChange={handleName}
        />
      </div>
      <div>
        <label htmlFor="phone-number">Number: </label>
        <input
          id="phone-number"
          value={newPhoneNumber}
          placeholder="write a new name"
          onChange={handlePhoneNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
