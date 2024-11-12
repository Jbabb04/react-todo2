import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Grocery shopping" },
  { id: 3, title: "Call the doctor" }
];

function App() {

  return (
    <div>
      <h1> Todo List</h1>
      <u1>
       {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
       ))}
      </u1>
    </div>
  );
}

export default App
