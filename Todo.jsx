/* import React, { useState } from 'react';
import './App.css';

let globalID = 0;
function App() {

  const [task, setTask] = useState("")       //for todo which we have to add
  const [todos, setTodos] = useState([])    // array in which all todo are going to add

  function createtodo() {
    setTodos(oldtodos => {     //using functional Argument way by sing oldvalues.
      setTask('')
      return[...oldtodos, {todo: task, id: globalID++}]
    });
  }

  function deleteItem(itemID) {
    setTodos(oldtodos => oldtodos.filter(item => item.id !== itemID)) //uss functional argument then after arrow function
    //oldtodos is use to retrun a array which use to filter those item whose item.id is not equal to the id which is passes 
    //in deleteitem function
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" vale={task} onChange={e => (       //creating an event so that it get fired when on clicking and get added to array
        setTask(e.target.value)
      )} />
      <button onClick={createtodo}>Click to add</button>
      <ul>
        {todos.map((item,index) => {              //mapping all todo in a list
          return ( //accessing item in todo list with a unique global id and trying to delete by usng the id of an item in list
          //if we use index in place of item then it will chnage the original unique id of list like apple is at id 1 mango is at id 2
          //grapes is at id 3 if you delete mango at id 2 and if you use item.id then id remain same as apple at 1 and grapes at 3
          //but if you use index.id the id get changed with apple at 1 but grapes at 2
            <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>  
            </div>
        )})}
      </ul>
    </div>
  );
}
export default App;*/
