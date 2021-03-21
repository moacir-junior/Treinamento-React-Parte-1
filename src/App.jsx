import React from 'react';
import Card from './components/Card';

import moacir from './assets/img/moacir.jpeg';
import tim from './assets/img/tim.png';

function App() {
  return (
    <>
      <Card name="Moacir Zimermann Junior" role="Programador" img={moacir} />
      <Card name="Tim Bernes-Lee" role="Criador da World Wide Web" img={tim} />
    </>
  );
}

export default App;