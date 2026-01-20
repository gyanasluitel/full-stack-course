import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import GitWorkflow from './pages/git/GitWorkflow'
import GitReviseAndBranching from './pages/git/GitReviseAndBranching'
import TypeScriptTutorial from './pages/typeScript/TypeScriptTutorial'

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="git-github" element={<GitWorkflow />}>Git & GitHub</Route>
        <Route path="git-revise-branching" element={<GitReviseAndBranching />}>Git Revise & Branching</Route>
        <Route path="type-script-tutorial" element={<TypeScriptTutorial />}>TypeScript Tutorial</Route>
      </Routes>
  )
}

export default App
