import React from 'react';
import {RecoilRoot} from 'recoil';
import './App.css';
import NameInput from './components/NameInput/NameInput';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <RecoilRoot> 
      <div className={`App`}>
        <Header/>
        <NameInput/>
        <Footer/>
      </div>
    </RecoilRoot>

  );
}

export default App;
