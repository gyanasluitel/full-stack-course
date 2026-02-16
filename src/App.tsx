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
// import ReactTodoApp from './pages/react/ReactTodoApp';
import BudgetTrackerApp from './pages/react/BudgetTrackerApp';
import ReactHooks from './pages/react/ReactHooks';
import BudgetTrackerAppLocalStorage from './pages/react/BudgetTrackerAppLocalStorage';
import BudgetTrackerCustomHook from './pages/react/BudgetTrackerCustomHook';
import Routing from './pages/react/Routing';
import BudgetTrackerRouting from './pages/react/BudgetTrackerRouting';
import ReactStateManagement from './pages/react/ReactStateManagement';
import BudgetTrackerContext from './pages/react/BudgetTrackerContext';

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
        {/* <Route path="todo-app" element={<ReactTodoApp />} /> */}
        <Route path="budget-tracker-app" element={<BudgetTrackerApp />} />
        <Route path="react-hooks" element={<ReactHooks />} />
        <Route path="budget-tracker-app-localStorage" element={<BudgetTrackerAppLocalStorage />} />
        <Route path="budget-tracker-app-customHooks" element={<BudgetTrackerCustomHook />} />
        <Route path="routing" element={<Routing />} />
        <Route path="budget-tracker-routing" element={<BudgetTrackerRouting />} />
        <Route path="react-state-management" element={<ReactStateManagement />} />
        <Route path="budget-tracker-context" element={<BudgetTrackerContext />} />

        <Route path="*" element={
          <div style={{ padding: '2rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App
