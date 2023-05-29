import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';
import { Value } from 'sass';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(dummyTodos)

  const handleChange = (Value) => {
    setInputValue(Value);
  };


  const handleAddTodo = () => {
    if(inputValue.length === 0) {
      return
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id:Math.random() * 100,
          title: inputValue,
          isDone: false,
        }
      ]
    })
    setInputValue('')
  }

  const handleKeyDown = () => {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInputValue('');
  }

  const handleToggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone:!todo.isDone
          }
        }
        return todo
      })
    })
  }

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection todos={todos} onToggleDone={handleToggleDone}/>
      <Footer />
    </div>
  );
};

export default TodoPage;
