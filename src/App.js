import CommandBlock from './components/CommandBlock'
import Navbar from './components/NavBar'
import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [expanded, setExpanded] = useState(0)
  return (
    <div className="App">
      <Navbar/>
      <CommandBlock/>
    </div>
  );
}

export default App;
