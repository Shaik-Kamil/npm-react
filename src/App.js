import logo from './logo.svg';
import './App.css';
import { people } from './people';
import sayHello from './sayHello';
import { colors, flavors } from './colors';

// console.log(people);
// console.log(sayHello);
// console.log(colors[0].name);
console.log(flavors[0]);

// people.forEach((person) => {
//   sayHello(person);
// });

// people.forEach(sayHello);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
