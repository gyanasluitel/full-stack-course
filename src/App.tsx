import './App.css'
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Home from './pages/Home';
import GitWorkflow from './pages/git/GitWorkflow';
import GitReviseAndBranching from './pages/git/GitReviseAndBranching';
import TypeScriptTutorial from './pages/typeScript/TypeScriptTutorial';
import TypeScriptTutorial2 from './pages/typeScript/TypeScriptTutorial2';
import AsyncProgramming from './pages/asyncProgramming/AsyncProgramming';
import ReactTutorial from './pages/react/ReactTutorial';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      let path = redirect.replace(/^\/full-stack-course/, '');
      if (path.startsWith('/')) path = path.slice(1);
      navigate('/' + path, { replace: true });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="git-github" element={<GitWorkflow />}>Git & GitHub</Route>
      <Route path="git-revise-branching" element={<GitReviseAndBranching />}>Git Revise & Branching</Route>
      <Route path="type-script-tutorial" element={<TypeScriptTutorial />}>TypeScript Tutorial</Route>
      <Route path="type-script-tutorial-2" element={<TypeScriptTutorial2 />}>TypeScript Tutorial Continue</Route>
      <Route path="async-programming" element={<AsyncProgramming />}>Asynchronous Programming</Route>
      <Route path="react-tutorial" element={<ReactTutorial />} >React Tutorial</Route>
    </Routes>
  );
}

export default App
