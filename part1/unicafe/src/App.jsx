import { useState } from "react";

const Button = ({ text, onSmash, id }) => {
  return (
    <button
      id={id}
      onClick={onSmash}
      className="border border-stone-400 bg-blue-300   rounded-sm p-2 font-semibold shadow-sm shadow-blue-300 hover:bg-blue-900 hover:text-amber-50 active:bg-cyan-500"
    >
      {text}
    </button>
  );
};

const StatisticLine = ({ value, text }) => (
  <tr>
    <td className="px-4">{text}</td>
    <td className="px-1">{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mt-3">Statistics</h3>

      <table>
        <tbody>
          <StatisticLine value={good} text={"Good"} />
          <StatisticLine value={neutral} text={"Neutral"} />
          <StatisticLine value={bad} text={"Bad"} />
          <StatisticLine value={total} text={"All"} />
          <StatisticLine value={average.toFixed(1)} text={"Average"} />
          <StatisticLine value={positive.toFixed(1) + "%"} text={"Positive"} />
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementComments = (e) => {
    switch (e.target.id) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <section className="flex flex-col w-full min-h-screen items-center">
      <h2 className="text-4xl font-bold mt-1">Give feedback</h2>

      <div className="flex mt-4 gap-1">
        <Button id={"good"} text={"Good"} onSmash={handleIncrementComments} />
        <Button
          id="neutral"
          text={"Neutral"}
          onSmash={handleIncrementComments}
        />
        <Button id="bad" text={"Bad"} onSmash={handleIncrementComments} />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </section>
  );
}

export default App;
