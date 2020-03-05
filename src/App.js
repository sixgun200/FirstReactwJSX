import React from 'react';
import './App.css';

import PersonCard2 from './components/PersonCard2';

function App() {
  return (
    <div className="App">
        <PersonCard2 firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <PersonCard2 firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        <PersonCard2 firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <PersonCard2 firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
