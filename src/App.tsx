import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import GitWorkflow from './pages/GitWorkflow'

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="git-github" element={<GitWorkflow />}>Git & GitHub</Route>
      </Routes>
  )
}

export default App
