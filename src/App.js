import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  

  const [stateVariable, setStateVariable] = useState('');
  useEffect(() => {
    setStateVariable("Fred")
    const baseUrl = '/api/test-function'
    axios.get(baseUrl).then((response) => {
      setStateVariable(response.data)
    })
    return () => {
      
    }
  }, [])

  return <div>Hello {stateVariable} from an azure static webapp</div>;
}

export default App;
