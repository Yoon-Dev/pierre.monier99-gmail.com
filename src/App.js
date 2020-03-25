import React from 'react';
import './App.css';
import ButtonMaterail from './ButtonMaterial';
import { PrimaryButtonComposition, SecondaryButtonComposition, PrimaryButtonHeritage, SecondaryButtonHeritage } from './ButtonStyledComponents'

function App() {
  return (
    <div className="App">
      <ButtonMaterail/>
      <PrimaryButtonComposition>Hello</PrimaryButtonComposition>
      <SecondaryButtonComposition>World Composition</SecondaryButtonComposition>
      <PrimaryButtonHeritage>Hello</PrimaryButtonHeritage>
      <SecondaryButtonHeritage>World Heritage</SecondaryButtonHeritage>
    </div>
  );
}

export default App;