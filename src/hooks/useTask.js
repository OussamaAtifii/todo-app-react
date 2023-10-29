import { TASKS } from "../consts/tasks"
import { useState } from "react"

export function useTask() {
  const [tasks, setTasks] = useState(TASKS)

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completeTask = (id) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        return task.id === id ? { ...task, completed: !task.completed } : task
      })
    })
  }

  return { tasks, setTasks, deleteTask, completeTask }
}