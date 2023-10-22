export function TodoItem({ title, date, completed, deleteTask, completeTask }) {
  function formatDate(date) {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return `${month}/${day}/${year} - ${hour}:${minutes}`
  }

  return (
    <article>
      <div>
        <p className={completed ? 'completed-task' : ''}>{title}</p>
        <p className='date'>{formatDate(date)}</p>
      </div>
      <div className='completed-container'>
        <button className={completed ? 'btn completed-btn' : 'btn notcompleted-btn'} onClick={completeTask}>{completed ? 'Completed' : 'Not Completed'}</button>
        <button className='btn delete-btn' onClick={deleteTask}>Delete</button>
      </div>
    </article>
  )
}