import React from 'react';
import Counter from './components/Counter';
import List from './components/List';
import Form from './components/Form';
import FormHook from './components/FormHook';
import FormOne from './components/FormOne';

function App() {
  return (
   <div>
       <h1>Hello world!</h1>
       <Counter/>
       <hr/>
       <List/>
       <hr/>
       <Form/>
       <hr/>
       <FormHook/>
       <hr/>
       <FormOne/>
       
   </div>
  );
}

export default App;
