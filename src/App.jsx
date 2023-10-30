import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import { v4 as uuidv4 } from 'uuid'
import { useTask } from './hooks/useTask'
import { MagicMotion } from 'react-magic-motion'
import './App.css'

function App() {
  const { tasks, setTasks, deleteTask, completeTask } = useTask()
  const [task, setTask] = useState('')
  const [filterCompleted, setFilterCompleted] = useState(false)

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const addTask = () => {
    if (task) {
      const taskToAdd = {
        id: uuidv4(),
        title: task,
        date: new Date(),
      }

      setTasks([...tasks, taskToAdd])
      setTask('')
    }
  }

  const handleTasks = (option) => {
    setFilterCompleted(option)
  }

  const filteredTasks = filterCompleted
    ? tasks.filter(task => task.completed === true)
    : tasks

  return (
    <MagicMotion>
      <main>
        <header>
          <h1>TODO APP</h1>
        </header>
        <div className='add-task'>
          <input id='task-input' className='task-input' type='text' placeholder='Add new task...' onChange={handleChange} value={task} />
          <button className='btn add-btn' onClick={addTask}>Add</button>
        </div>
        <div className='filter-container'>
          <button className='btn filter-btn' onClick={() => handleTasks(true)}>Completed Tasks</button>
          <button className='btn filter-btn' onClick={() => handleTasks(false)}>All Tasks</button>
        </div>
        <section>
          {filteredTasks.map(({ id, title, date, completed }) => (
            <TodoItem
              key={id}
              title={title}
              date={date}
              completed={completed}
              deleteTask={() => deleteTask(id)}
              completeTask={() => completeTask(id)}
            />
          ))}
        </section>
      </main>
    </MagicMotion>
  )
}

export default App
