const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Grocery shopping" },
    { id: 3, title: "Call the doctor" }
  ];
  
function TodoList() {
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

export default TodoList;