import logo from './logo.svg';
import './App.css';

let name = "John";
function App() {
  return (
    <>
    <nav>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam, sit, eligendi placeat quis esse exercitationem accusantium sunt adipisci alias quod sint recusandae tempora neque nihil impedit ducimus molestias dicta quaerat quam magni. Omnis.
      </p>
    </div>
    </>
   );
}

export default App;
