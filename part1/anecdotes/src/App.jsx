import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

//flex-1 en lugar de w-full garantiza botones de tamaño idéntico
const Button = ({ text, onSmash }) => {
  return (
    <button
      className="flex-1 rounded-lg py-2.5 bg-cyan-700 shadow-sm shadow-cyan-900 text-cyan-50 font-bold tracking-wide hover:bg-cyan-800 active:bg-cyan-500 transition-colors"
      onClick={onSmash}
    >
      {text}
    </button>
  );
};

const Statistics = ({ maxVotes, anecdotes, bestAnecdoteIndex }) => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-6 text-center bg-cyan-100 rounded-xl text-cyan-950 shadow-inner">
      <h2 className="font-bold text-2xl mb-4">Anecdote with most votes</h2>
      {maxVotes > 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-lg italic font-medium">"{anecdotes[bestAnecdoteIndex]}"</p>
          <p className="mt-4 text-xl font-bold">has {maxVotes} votes</p>
        </div>
      ) : (
        <p className="text-cyan-800/70 italic mt-2">No votes yet</p>
      )}
    </section>
  );
};

function App() {
  const [selected, setSelected] = useState(0);
  // usar ()=> en el estado garantiza que se ejecute una sola vez por render
  const [votes, setVotes] = useState(() => new Array(anecdotes.length).fill(0));

  const handleNextAnecdoteBtn = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  const maxVotes = Math.max(...votes);
  const bestAnecdoteIndex = votes.indexOf(maxVotes);

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-cyan-50 p-4">
      <div className="w-full max-w-xl p-6 rounded-2xl flex flex-col gap-6 bg-cyan-600 shadow-xl text-cyan-50 text-center">

        <section className="flex flex-col items-center p-2">
          <h2 className="text-2xl font-bold mb-4">Anecdote of the day</h2>
          <div className="min-h-[120px] flex items-center justify-center">
            <p className="text-lg font-medium leading-relaxed">"{anecdotes[selected]}"</p>
          </div>

          <p className="mt-4 font-semibold text-cyan-200">Has {votes[selected]} votes</p>

          <div className="flex w-full gap-4 mt-6">
            <Button text="Next Anecdote" onSmash={handleNextAnecdoteBtn} />
            <Button text="Vote" onSmash={handleVote} />
          </div>
        </section>

        <Statistics
          maxVotes={maxVotes}
          anecdotes={anecdotes}
          bestAnecdoteIndex={bestAnecdoteIndex}
        />
      </div>
    </div>
  );
}

export default App;
