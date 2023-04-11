import React, { useContext, useState } from 'react'
import { TasksContext, useTaskDispatch } from '@/demo1/TaskContext'

export default function TaskList({ onChangeTask, onDeleteTask }) {
  const tasks = useContext(TasksContext)
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  )
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useTaskDispatch()
  let taskContent
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            })
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label>
      <input
        type='checkbox'
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          })
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          })
        }}
      >
        Delete
      </button>
    </label>
  )
}
