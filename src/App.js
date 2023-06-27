import Navbar from './components/Navbar';
import Grid from './components/Grid';
import './App.css'
import { useState } from 'react';

function App() {

  const [selectedAlgorithm,setSelectedAlgorithm] = useState('');
  const handleSelectedAlgorithm = (algo) => {
    setSelectedAlgorithm(algo);
  }

  return (
    <>
      <Navbar 
      handleSelectedAlgorithm = {handleSelectedAlgorithm}
      selectedAlgorithm = {selectedAlgorithm}
      />
      <Grid
      selectedAlgorithm = {selectedAlgorithm} 
      />
    </>
  );
}

export default App;
