import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState([0, 0, 0]);

  //Add 1 to all numbers DONE
  const incrementAll = () => {
    setCounters((prevArr) => {
      return prevArr.map((item) => item + 1);
    });
  };

  //Create a component called Counter that renders a button and a number. Increment the number by 1 if the user clicks on the button. DONE
  const handleIncrement = (index) => {
    console.log("clicked");
    setCounters((prevArr) =>
      prevArr.map((item, i) => {
        if (i === index) return item + 1;
        else return item;
      })
    );
  };

  const handleAddCounter = () => {
    setCounters((prevArr) => [...prevArr, 0]);
  };
  return (
    <div>
      <button onClick={incrementAll}>Add All</button>

      {/* Render individual counters */}
      {counters.map((num, index) => (
        <Counter
          count={num}
          onClick={handleIncrement}
          key={index}
          index={index}
        />
      ))}

      {/* Add counter button DONE*/}
      <button onClick={handleAddCounter}>Add Counter</button>
    </div>
  );
}

export default App;
