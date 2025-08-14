import React, { useState } from 'react'
import { todoType } from './components/todo.model'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'


const App: React.FC = () => {

  const [todo, setTodo] = useState<todoType[]>([])

  const todoAddHandler = (text: string) => {
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: Date.now().toString(), text: text }
    ])
  }

  const deleteLi = (id: string | number) => {
    setTodo((prevTodo) => prevTodo.filter(todo => todo.id !== id));
  };

  const editLi = (id: string | number, newText: string)=>{
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  return (
    <div className='d-flex align-items-center  justify-content-center flex-column'>
      <div className="col-5">
        <NewTodo onAddTodo={todoAddHandler} />
        <TodoList items={todo} onDelete={deleteLi} onEdit={editLi}/>
      </div>
    </div>
  )
}

export default App