import { useSelector } from 'react-redux'

import { getTodosByFolder } from '../store/selectors/todos'
import { CreateTodo } from '../components/CreateTodo'
import { Todo } from '../components/Todo'

export const Folder = () => {
  const todos = useSelector((state) => getTodosByFolder(state))

  return (
    <>
      <CreateTodo />
      <section>
        {todos.length === 0 &&
          <h4>...</h4>
        }
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            key={todo.id}
          />
        ))}
      </section>
    </>
  )
}