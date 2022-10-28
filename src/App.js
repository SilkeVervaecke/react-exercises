import React, {useState} from 'react';
import './App.css';
import NameInput from './components/NameInput/NameInput';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  const [ nthFibonacciNumber, setNthFibonacciNumber ] = useState(0);

  return (
    <div className={`App`}>
      <Header/>
      <NameInput/>
      <Footer/>
    </div>
  );
}

export default App;
