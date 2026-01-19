import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import GitWorkflow from './pages/GitWorkflow'
import GitReviseAndBranching from './pages/GitReviseAndBranching'

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="git-github" element={<GitWorkflow />}>Git & GitHub</Route>
        <Route path="git-revise-branching" element={<GitReviseAndBranching />}>Git Revise & Branching</Route>
      </Routes>
  )
}

export default App
