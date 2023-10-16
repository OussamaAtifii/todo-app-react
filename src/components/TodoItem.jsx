export function TodoItem({ title, date, deleteTask }) {
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
        <p>{title}</p>
        <p className='date'>{formatDate(date)}</p>
      </div>
      <button className='btn delete-btn' onClick={deleteTask}>Delete</button>
    </article>
  )
}