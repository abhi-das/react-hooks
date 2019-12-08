import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CardComponent from './components/card-component';
import FormContainer from './components/form/form';

function App() {
  return (
    <div className="App">
      <CardComponent />
      <FormContainer />
    </div>
  );
}

export default App;
