import { useState } from 'react'
import { useTaskDispatch } from './TaskContext'

let nextId = 3

export default function AddTask({ onAddTask }: { onAddTask: (s: string) => void }) {
  const [text, setText] = useState('')
  const dispatch = useTaskDispatch()

  return (
    <>
      <input placeholder='Add task' value={text} onChange={e => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('')
          dispatch({
            type: 'added',
            id: nextId++,
            text: text
          })
        }}
      >
        Add
      </button>
    </>
  )
}
function useReducer(taskReducer: any, initialTasks: any): [any, any] {
  throw new Error('Function not implemented.')
}
