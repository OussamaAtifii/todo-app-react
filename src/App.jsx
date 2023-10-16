import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import { TASKS } from './consts/tasks'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(TASKS)

  const addTask = () => {
    const taskToAdd = document.getElementById('task-input').value.trim()

    if (taskToAdd) {
      const task = {
        id: tasks.length + 1,
        title: taskToAdd,
        date: new Date(),
      }

      setTasks([...tasks, task])
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <main>
      <header>
        <h1>TODO APP</h1>
      </header>
      <div className='add-task'>
        <input id='task-input' className='task-input' type='text' placeholder='Add new task...' />
        <button className='btn add-btn' onClick={addTask}>Add</button>
      </div>
      <section>
        {tasks.map(({ id, title, date }) => (
          <TodoItem
            key={id}
            title={title}
            date={date}
            deleteTask={() => deleteTask(id)}
          />
        ))}
      </section>
    </main>
  )
}

export default App