function TodoShow({todo, onDelete}) {

  const handleClick = () => {
    onDelete(todo.id)
  }


  return(
    <div>
      {todo.todoItem}
      <button onClick={handleClick}>
        Delete
      </button>
    </div>
  )
}

export default TodoShow;