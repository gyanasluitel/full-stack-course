import './App.css'
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Home from './pages/Home';
import GitWorkflow from './pages/git/GitWorkflow';
import GitReviseAndBranching from './pages/git/GitReviseAndBranching';
import TypeScriptTutorial from './pages/typeScript/TypeScriptTutorial';
import AsyncProgramming from './pages/asyncProgramming/AsyncProgramming';
import ReactTutorial from './pages/react/ReactTutorial';
import ReactBasics from './pages/react/ReactBasics';
import FirstReactApp from './pages/react/FirstReactApp';
import ReactTodoApp from './pages/react/ReactTodoApp';

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
      <Route path="async-programming" element={<AsyncProgramming />}>Asynchronous Programming</Route>
      <Route path="react-tutorial">
        <Route index element={<ReactTutorial />} />
        <Route path="basics" element={<ReactBasics />} />
        <Route path="first-react-app" element={<FirstReactApp />} />
        <Route path="todo-app" element={<ReactTodoApp />} />
      </Route>
    </Routes>
  );
}

export default App
