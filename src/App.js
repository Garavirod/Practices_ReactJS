import React from 'react';
import Counter from './components/Counter';
import List from './components/List';
import Form from './components/Form';

function App() {
  return (
   <div>
       <h1>Hello world!</h1>
       <Counter/>
       <hr/>
       <List/>
       <hr/>
       <Form/>
   </div>
  );
}

export default App;
