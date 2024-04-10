import React, { useState } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { ToDoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton'
import './app.css'
import { TodoComplete } from '../TodoComplete';



/* const defaultTodos=[
  {text:"cortar cebolla",completed:true},
   {text:"cortarme el cabello",completed:false},
  {text:"cortarme las uñas",completed:true},
  {text:"hacer un saludo",completed:false},
  {text:"cortar jitomate",completed:true},
  {text:"cortar carne",completed:false},
  {text:"dormir",completed:true},
  {text:"soñar",completed:false}, 

] */

/* localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))  */
/*  localStorage.removeItem('TODOS_V1');  */


function useLocalStorage(itemName,initialValue){

  const[item,setItem]=React.useState(initialValue);
  const[loading,setLoading]=React.useState(true);
  const[error,setError]=React.useState(false);


  React.useEffect(()=>{
    
    const localStorageItem=localStorage.getItem(itemName)
    let parseItem;

    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify([initialValue]))
      parseItem=[];
    }else{
       parseItem=JSON.parse(localStorageItem)
    }
  });




  const saveItem=(newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item,saveItem];
}

function App() {


  const [todos,saveTodos]=useLocalStorage('TODOS_V1',[])
  
  const completedTodosText=todos.filter(todo=>todo.completed)


  const completedTodos=todos.filter(todo=>todo.completed).length
  const totalTodos=todos.length
  const [searchValue, setSearchValue]=React.useState("");


  const searchedTodos=todos.filter((todo)=>{
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )



  const completeTodo = (text)=>{
    const newTodos=[...todos];
    const index = newTodos.findIndex(
      (todo)=>todo.text===text
    )
    newTodos[index].completed= !(newTodos[index].completed);
    saveTodos(newTodos)
  }

  const deleteTodo=(text)=>{
    const newTodos=[...todos]
    const index=newTodos.findIndex((todo)=>todo.text===text)
    newTodos.splice(index,1)
    saveTodos(newTodos)
  }
 
  return (
    
    <React.Fragment>
      <div id='tareas'>
        
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <CreateTodoButton/>
      <TodoList>
        {loading && <p>cargando</p>}
        {error && <p>cargando</p>}
        {searchedTodos.map(todo=>
            <ToDoItem 
            onDelete={()=>deleteTodo(todo.text)}
            onComplete={()=>completeTodo(todo.text)} 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>
          )}
      </TodoList>

      </div>
      <div id='tareasCompletas'>
     
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/> 
      <TodoComplete>
      {completedTodosText.map(todo=>
            <ToDoItem 
            onDelete={()=>deleteTodo(todo.text)}
            onComplete={()=>completeTodo(todo.text)} 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>
          )}
      </TodoComplete>
      </div>

    </React.Fragment>


  );
}





export default App;


