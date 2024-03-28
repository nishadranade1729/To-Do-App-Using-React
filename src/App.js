// // import './App.css';
// // import ToDoList from "./ToDoList"
// // import {useState} from "react"
// // import SearchBar from './Searchbar';

// // let idNum = 0

// // function App() {
// //   const [toDoList, setToDoList] = useState([])
// //   const [text, setText] = useState("")
// //   const [filter, setFilter] = useState("none")

//   // const TodoList = ({ todos }) => {
//   //   const [sortedTodos, setSortedTodos] = useState([todos]);
  
//   //   const sortByPriority = () => {
//   //     const sorted = [todos].sort((a, b) => a.priority - b.priority);
//   //     setSortedTodos(sorted);
//   //   };
//   import './App.css';
// import ToDoList from "./ToDoList";
// import { useState } from "react";
// import SearchBar from './Searchbar';

// let idNum = 0;

// function App() {
//   const [toDoList, setToDoList] = useState([]);
//   const [text, setText] = useState("");
//   const [filter, setFilter] = useState("none");
//   const [search, setSearch] = useState('');
  


//   function handleDelete(taskId) {
//     setToDoList(toDoList.filter(task => task.id !== taskId))
//   }

//   function clearCompleted() {
//     setToDoList(toDoList.filter(task => task.checked === false))
//   }
//   const filteredTodo = toDoList.find((todo) =>
//   todo.text.toLowerCase() === search.toLowerCase()
// ); // Find the exact matching todo


//   function addTask(e) {
//     idNum++
//     const newTask = {
//       id: idNum,
//       checked: false,
//       text: text,
//     }
//     setText("")
//     toDoList.push(newTask)
//     e.preventDefault()
//   }
//   //const [search, setSearch] = useState('');

//   // ... (functionality for adding, editing, and completing todos)

// //   const filteredTodo = toDoList.find((todo) =>
// //     todo.title.toLowerCase() === search.toLowerCase()
// //   ); // Find the exact matching todo
// //   return (
// //     <div className="App">
// //       <div className="todo-header">
// //         <h1>To-Do List</h1>
        
// //       </div>
     
// //       <form id="add-form" onSubmit={e => addTask(e)}>
// //         <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add a To-Do"/>
// //         <button type="submit">ADD</button>
// //       </form>
// //       <div className="todo-body">
// //         <ToDoList toDoList={toDoList} filter={filter} handleDelete={handleDelete} />
// //       </div>
// //       {/* <div>
// //       <button onClick={sortByPriority}>Sort by Priority</button>
// //       <button onClick={sortByDate}>Sort by Date</button>
// //       <ul>
// //         {sortedTodos.map(todo => (
// //           <li key={todo.id}>
// //             {todo.task} - Priority: {todo.priority}, Date: {todo.date}
// //           </li>
// //         ))}
// //       </ul>
// //     </div> */}
// //       <nav className="todo-footer">
// //           <button onClick={()=>setFilter("all")}>All</button>
// //           <button onClick={()=>setFilter("incomplete")}>Incomplete</button>
// //           <button onClick={()=>setFilter("complete")}>Completed</button>
// //           <button onClick={clearCompleted}> Clear Completed</button>
// //       </nav>
// //     </div>
// //   );
// // }
// return (
//   <div className="App">
//     <div className="todo-header">
//       <h1>To-Do List</h1>
//       <SearchBar search={search} setSearch={setSearch} />
//     </div>

//     <form id="add-form" onSubmit={(e) => addTask(e)}>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Add a To-Do"
//       />
//       <button type="submit">ADD</button>
//     </form>
//     <div className="todo-body">
//       {search && filteredTodo ? (
//         <ToDoList toDoList={[filteredTodo]} filter={filter} handleDelete={handleDelete} />
//       ) : (
//         <ToDoList toDoList={toDoList} filter={filter} handleDelete={handleDelete} />
//       )}
//     </div>

//     <nav className="todo-footer">
//       <button onClick={() => setFilter("all")}>All</button>
//       <button onClick={() => setFilter("incomplete")}>Incomplete</button>
//       <button onClick={() => setFilter("complete")}>Completed</button>
//       <button onClick={clearCompleted}> Clear Completed</button>
//     </nav>
//   </div>
// );
// }


// export default App;
// import './App.css';
// import ToDoList from "./ToDoList"
// import {useState} from "react"
// import SearchBar from './Searchbar';

// let idNum = 0;

// function App() {
//   const [toDoList, setToDoList] = useState([]);
//   const [text, setText] = useState("");
//   const [filter, setFilter] = useState("none");
//   const [search, setSearch] = useState('');

//   function handleDelete(taskId) {
//     setToDoList(toDoList.filter(task => task.id !== taskId))
//   }

//   function clearCompleted() {
//     setToDoList(toDoList.filter(task => task.checked === false))
//   }

//   function addTask(e) {
//     idNum++;
//     const newTask = {
//       id: idNum,
//       checked: false,
//       text: text,
//     }
//     setText("")
//     setToDoList([...toDoList, newTask]) // Use spread operator for immutability
//     e.preventDefault()
//   }

//   const filteredTodos = toDoList.filter((todo) => {
//     // Implement case-insensitive search
//     const searchTerm = search.toLowerCase();
//     const todoText = todo.text.toLowerCase();
//     return todoText.includes(searchTerm);
//   });

//   const filteredTodosByFilter = filteredTodos.filter((todo) => {
//     switch (filter) {
//       case 'all':
//         return true;
//       case 'incomplete':
//         return !todo.checked;
//       case 'complete':
//         return todo.checked;
//       default:
//         return true;
//     }
//   });

//   return (
//     <div className="App">
//       <div className="todo-header">
//         <h1>To-Do List</h1>
//         <SearchBar search={search} setSearch={setSearch} />
//       </div>

//       <form id="add-form" onSubmit={addTask}>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Add a To-Do"
//         />
//         <button type="submit">ADD</button>
//       </form>
//       <div className="todo-body">
//         {search ? (
//           <ToDoList toDoList={filteredTodosByFilter} filter={filter} handleDelete={handleDelete} />
//         ) : (
//           <ToDoList toDoList={toDoList} filter={filter} handleDelete={handleDelete} />
//         )}
//       </div>

//       <nav className="todo-footer">
//         <button onClick={() => setFilter("all")}>All</button>
//         <button onClick={() => setFilter("incomplete")}>Incomplete</button>
//         <button onClick={() => setFilter("complete")}>Completed</button>
//         <button onClick={clearCompleted}> Clear Completed</button>
//       </nav>
//     </div>
//   );
// }

// export default App;

import './App.css';
import ToDoList from "./ToDoList";
import { useState } from "react";
import SearchBar from './Searchbar';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("none");
  const [search, setSearch] = useState('');

  function handleDelete(taskId) {
    setToDoList(toDoList.filter(task => task.id !== taskId));
  }

  function clearCompleted() {
    setToDoList(toDoList.filter(task => task.checked === false));
  }

  // function addTask(e) {
  //   const newTask = {
  //     id: Date.now(), // Unique identifier based on timestamp
  //     checked: false,
  //     text: text,
  //   };
  //   setText("");
  //   setToDoList([...toDoList, newTask].sort((a, b) => a.id - b.id)); // Sort by ID on adding
  //   e.preventDefault();
  // }
  // function addTask(e) {
  //   const newTask = {
  //     id: Date.now(), // Unique identifier based on timestamp
  //     checked: false,
  //     text: text,
  //   };
  //   setText("");
  //   const newList = toDoList.concat({ id: Date.now(), checked: false, text: text });
  //   setToDoList(newList.sort((a, b) => a.id - b.id));
  //   e.preventDefault();
  // }
  function addTask(e) {
    const newTask = {
      id: Date.now(), // Unique identifier based on timestamp
      checked: false,
      text: text,
    };
    setText("");
    const sortedList = [...toDoList, newTask].sort((a, b) => {
      
      const textA = a.text.toLowerCase();
      const textB = b.text.toLowerCase();
      return textA.localeCompare(textB);
    });
    setToDoList(sortedList);
    e.preventDefault();
  }

  const filteredTodos = toDoList.filter((todo) => {
    // Implement case-insensitive search
    const searchTerm = search.toLowerCase();
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchTerm);
  });

  const filteredTodosByFilter = filteredTodos.filter((todo) => {
    switch (filter) {
      case 'all':
        return true;
      case 'incomplete':
        return !todo.checked;
      case 'complete':
        return todo.checked;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <div className="todo-header">
        <h1>To-Do List</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <form id="add-form" onSubmit={addTask}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a To-Do"
        />
        <button type="submit">ADD</button>
      </form>
      <div className="todo-body">
        {search ? (
          <ToDoList toDoList={filteredTodosByFilter} filter={filter} handleDelete={handleDelete} />
        ) : (
          <ToDoList toDoList={toDoList} filter={filter} handleDelete={handleDelete} />
        )}
      </div>

      <nav className="todo-footer">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        <button onClick={() => setFilter("complete")}>Completed</button>
        <button onClick={clearCompleted}> Clear Completed</button>
      </nav>
    </div>
  );
}

export default App;

