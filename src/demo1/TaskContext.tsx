import { createContext, useContext, useReducer, useState } from 'react'

export const TasksContext = createContext(null) // 创建context
export function useTask() {
  return useContext(TasksContext)
}
export const TasksDispatchContext = createContext(null)
export function useTaskDispatch() {
  return useContext(TasksDispatchContext)
}

const initialTasks: task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
]
type task = { id: number; text?: string; done: boolean }
type action = task & {
  type: 'added' | 'changed' | 'deleted'
  task: task
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

function taskReducer(tasks: task[], action: action) {
  switch (action.type) {
    case 'added':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    case 'changed':
      return tasks.map(t => {
        if (t.id === action.id) return action.task
        else return t
      })
    case 'deleted':
      return tasks.filter(t => t.id !== action.id)
    default:
      throw new Error('Unknown action:' + action.type)
  }
}
