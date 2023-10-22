import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import { TASKS } from './consts/tasks'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState(TASKS)
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
      setTask("")
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completeTask = (id) => {
    const taskToModify = tasks.find(task => task.id === id)

    if (taskToModify) {
      taskToModify.completed = !taskToModify.completed
      setTasks([...tasks])
    }
  }

  const handleCompletedTasks = () => {
    setFilterCompleted(true)
  }

  const handleAllTasks = () => {
    setFilterCompleted(false)
  }

  const filteredTasks = filterCompleted
    ? tasks.filter(task => task.completed === true)
    : tasks

  return (
    <main>
      <header>
        <h1>TODO APP</h1>
      </header>
      <div className='add-task'>
        <input id='task-input' className='task-input' type='text' placeholder='Add new task...' onChange={handleChange} value={task} />
        <button className='btn add-btn' onClick={addTask}>Add</button>
      </div>
      <div className='filter-container'>
        <button className='btn filter-btn' onClick={handleCompletedTasks}>Completed Tasks</button>
        <button className='btn filter-btn' onClick={handleAllTasks}>All Tasks</button>
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
  )
}

export default App
