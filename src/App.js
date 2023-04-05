import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputvalue] = useState("");

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleAdditems = () => {
    if (inputValue.trim()) {
      if (!items.includes(inputValue)) { // Check if item already exists in the list
        setItems([...items, inputValue]);
        setInputvalue("");
      } else {
        alert("This item is already in the list!");
      }
    }
  };

  const deleteitems = (delitem) => {
    setItems(items.filter((data) => data !== delitem));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAdditems}>Add</button>
      </div>
      <ul style={{alignItems:'center',border:'2px solid black',listStyleType:'none'}}>
        {items.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <button style={{margin:'10px'}} onClick={() => deleteitems(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
