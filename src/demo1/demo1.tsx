import AddTask from './AddTask'
import TaskList from './TaskList'
import { TaskProvider } from './TaskContext'

export default function TaskApp() {
  return (
    <TaskProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  )
}
