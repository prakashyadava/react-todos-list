import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import About from './MyComponents/About';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  let init;
  if (localStorage.getItem("todos") == null) {
    init = [];
  } else {
    init = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("Iam on delete",todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState(init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);


  }
  return (

    // <>      
    //  <Header title="My Todo List" />
    //  <AddTodo addTodo={addTodo} />
    //  <Todos todos={todos} onDelete={onDelete} />
    //  <Footer />
      
    // </>
    <BrowserRouter>
    <Header title="My Todo List" />
    <Routes>
      <Route path="/" element={<>{<><AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /></>}</>}/>
      <Route path="/about" element={<About/>}/>
      
    </Routes>
    <Footer />
  </BrowserRouter>

  );
}

export default App;
