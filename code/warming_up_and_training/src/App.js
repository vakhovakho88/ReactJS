import "./App.css";




import TimerChallenge from "./Components/01_TimerChallenge";


import LightToggle from "./Components/03_LightToggle";


function App3(){
  return (
    <LightToggle></LightToggle>
  );
}


function App2() {
  return (
    <TimerChallenge targetTime={5}></TimerChallenge>
  );
}

// Define an array of people data with their names and ages
const peopleData = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 },
  { name: "Eve", age: 35 },
  { name: "Charlie", age: 28 },
  { name: "Olivia", age: 29 },
  { name: "Daniel", age: 33 },
  { name: "Sophia", age: 27 },
  { name: "Liam", age: 31 },
  { name: "Emma", age: 24 },
  { name: "Michael", age: 26 },
  { name: "Ava", age: 32 },
  { name: "William", age: 29 },
  { name: "Mia", age: 23 },
  { name: "James", age: 34 },
  { name: "Isabella", age: 28 },
  { name: "Benjamin", age: 30 },
  { name: "Sophia", age: 25 },
  { name: "Lucas", age: 27 },
  { name: "Charlotte", age: 31 },
];


function App1() {
  return (
    <ul>
      {/* Map over the peopleData array to render a list of paragraphs */}
      {peopleData.map((person, index) => (
        // Each paragraph has a unique 'key' attribute to help React efficiently update the list
        <li key={index}>
           {/* Display the person's name and age */}
          Hi My Name is <b>{person.name}</b> and my age is <b>{person.age}</b>
        </li>
      ))}
    </ul>
  );
}


export default App3;
