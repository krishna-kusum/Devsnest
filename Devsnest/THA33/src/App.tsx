import React from 'react';
import TodoForm from './components/TodoForm'

let name: string = 'Krishna';

interface User {
  name: string;
  id: number;
}

let user: User = {
  name: name,
  id: 21
};

function App() {
  return (
    <div className = "App">
      {/* <h1>Hello World!</h1>
      {name}
      <br />
      {user.name} , {user.id} */}
      <TodoForm />
    </div>
  );
}

export default App;
