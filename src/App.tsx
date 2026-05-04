import { useState } from "react";
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    jsConfetti.addConfetti({
      emojis: ["💩"],
      emojiSize: 100,
    });
    setValue("");
    // setSubmitted(true);
  };

  return (
    <>
      <section id="center">
        <div className="mb-10 space-y-5">
          {submitted ? (
            <>
              <h1 className="font-bold!">Congrats!</h1>
              <p className="font-semibold text-lg">You just did some magic</p>
            </>
          ) : (
            <>
              <h1 className="font-bold!">
                The next Google<sup className="text-md">™</sup>
              </h1>
              <p className="font-semibold text-lg">Trust me bro</p>
            </>
          )}
        </div>

        <div className="mb-10 space-y-5"></div>
        {!submitted && (
          <form
            className="flex gap-2 text-xl max-w-lg mx-auto items-stretch w-full"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full bg-white placeholder:text-slate-400 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-300"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type something here..."
              type="text"
              value={value}
            />
            <button
              type="submit"
              className="h-full whitespace-nowrap bg-green-600 hover:bg-green-500 inline-block py-3 px-5 rounded-md font-bold text-white transition duration-300 ease focus:outline-none focus:ring-2 focus:ring-green-400 text-base focus:ring-offset-2"
            >
              Do magic
            </button>
          </form>
        )}
      </section>

      <div className="ticks"></div>
    </>
  );
}

export default App;
