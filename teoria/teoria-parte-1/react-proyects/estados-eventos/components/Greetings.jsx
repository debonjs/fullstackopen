const Hello = ({ name, age }) => {
  // const name = props.name;
  // const age = props.age;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probability bron in {bornYear()}</p>
    </div>
  );
};

const Greetings = () => {
  const name = "Debon";
  const age = 34;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Debian" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default Greetings;
