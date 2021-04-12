import React from 'react';
import Card from './components/Card';

import euImg from './assets/img/moacir.jpeg';
import timImg from './assets/img/tim.png';

const eu = {
  img: euImg,
  langs: ['js', 'css', 'html', 'react', 'angular', 'cpp', 'java', 'db']
}

const tim = {
  img: timImg,
  langs: ['db', 'mongo', 'html', 'css', 'js']
}

function App() {
  return (
     <>
       <Card name="Moacir Zimermann Junior" role="Programador" img={eu.img} langs={eu.langs} />
       <Card name="Tim Bernes-Lee" role="Criador da World Wide Web" img={timImg} langs={tim.langs} />
     </>
  );
}

export default App;