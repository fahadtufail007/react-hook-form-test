import React,{useState} from 'react';

import './App.css';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import ComponentC from './components/componentC';


function App() {
  const [inputState, setInputState] = useState<string>('');
  const [flag, setFlag] = useState(true);
  return (
    <div className="App">
      <h1>Component A</h1>
     <ComponentA inputState={inputState} setInputState={setInputState} flag={flag} setFlag={setFlag}/>
     <h1>Component B</h1>
     <ComponentB inputState={inputState} setInputState={setInputState} flag={flag} setFlag={setFlag} />
     <h1>Component C</h1>
     <ComponentC inputState={inputState} setInputState={setInputState} flag={flag} setFlag={setFlag} />

    </div>
  );
}

export default App;
