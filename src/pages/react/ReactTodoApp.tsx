import Assignment from "src/common/Assignment";
import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";
import RepoLink from "src/common/RepoLink";

const ReactTodoApp = () => {
    return (
        <div className="container">
            <h1>Todo app</h1>

			<p>In this tutorial, we will build a simple Todo app using React covering state management, working with forms, event handling, and component composition.</p>

			<ul>
                <ListItem>Create a new React project using Vite build tool: <code className="code-block fw-600">npm create vite@latest todo-app -- --template react-ts</code></ListItem>
                <ListItem>Navigate to the project directory: <code className="code-block fw-600">cd todo-app</code></ListItem>
                <ListItem>Open the repository in <code className="code-block fw-600">VS Code</code></ListItem>
                <ListItem>Run the server: <code className="code-block fw-600">npm run dev</code></ListItem>
            </ul>
			
			<p>Now, let's start building the Todo app step by step:</p>

            <ul>
                <ListItem>Create a <span className="stress">reset.css</span> file and add the following code to it:
                    <CodeBlock code={`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`} />
                </ListItem>
				<ListItem>Import the reset.css file in the root file <span className="stress">main.tsx</span> file</ListItem>
				<ListItem>Update the styling in the <span className="stress">index.css</span> file:
					<CodeBlock code={`:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: #fff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-width: 320px;
  min-height: 140vh;
}
`} />
				</ListItem>
				<ListItem>Similarly, update the styling in the <span className="stress">App.css</span> file:
					<CodeBlock code={`#root {
  max-width: 1280px;
  margin: 0 auto;
}

.container {
  margin: 60px auto;
  padding: 40px 32px;
  background-color: #6397cc;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}`} />
				</ListItem>

				<ListItem>I will create a header file that shows the title of the app</ListItem>
				<ListItem>Create a <span className="code-block fw-600">Header.tsx</span> file:
						<CodeBlock code={`import "./Header.css";

interface Props {
    title: string;
    description: string;
}

const Header = ({ title, description }: Props) => {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__description">{description}</p>
        </header>
    );
}

export default Header;`} />
				</ListItem>
				<ListItem>Create a <span className="code-block fw-600">Header.css</span> file:
							<CodeBlock code={`.header {
    color: #fff;
}

.header__title {
    font-size: 2rem;
    font-weight: bold;
}

.header__description {
    font-size: 1.2rem;
    margin-top: 1rem;
    font-style: italic;
}`} />
				</ListItem>

				<ListItem>The header component displays the title and description of the app.</ListItem>

				<ListItem>Use the Header component in the <span className="stress">App.tsx</span> file:
						<CodeBlock code={`import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className='container'>
      <Header title="Task Tracker" description='A simple app to track my tasks...' />

      <TodoList />
    </div>
  )
}

export default App;
`} />
				</ListItem>

				<ListItem>Next, we will create a <span className="code-block fw-600">TodoList</span> component that will manage the list of todos.</ListItem>
				<ListItem>Create a <span className="code-block fw-600">TodoList.tsx</span> file:
					<CodeBlock code={`import { useState } from "react";
import TaskList from "./TaskList";

export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

const INITIAL_TASKS: TodoItem [] = [
    { id: "task1", title: "Go through today's schedule", completed: false },
    { id: "task2", title: "Teach full stack course at Leapfrog Connect", completed: true }
]


const TodoList = () => {
    const [tasks, setTasks] = useState<TodoItem[]>(INITIAL_TASKS);

    return (
        <div>
            {tasks.map(taskItem => <div key={taskItem.id}>
                <p>{taskItem.title} <span>{taskItem.completed ? "Completed" : "Incomplete"}</span> </p>
            </div>)}
        </div>
    )
}

export default TodoList;`} />
				</ListItem>
				<ListItem>The TodoList component maintains the state of the list of tasks and renders them.</ListItem>
				<ListItem>The initial tasks are defined in the <span className="code-block fw-600">INITIAL_TASKS</span> constant.</ListItem>
				<ListItem>The initial state is set using the <span className="code-block fw-600">useState</span> hook with the <span className="code-block fw-600">INITIAL_TASKS</span> array.</ListItem>
				<ListItem>The tasks are rendered using the <span className="code-block fw-600">map</span> function.</ListItem>
				<ListItem>The <code className="code-block fw-600">tasks</code> array is looped to display each task item. Using the map function, we return an array of JSX elements representing each task.</ListItem>
            </ul>

			<p className="stress">For better readability, I will create a separate component to render the list of todo items.</p>

			<ul>
				<ListItem>Create a <span className="code-block fw-600">TaskList.tsx</span> file:
						<CodeBlock code={`import type { TodoItem } from "./TodoList";
import TaskItem from "./TaskItem";
import "./TaskList.css";

interface TaskListProps {
    tasks: TodoItem[];
}

const TaskList = ({ tasks, onToggle, onDelete }: TaskListProps) => {
    // Conditional rendering based on tasks length
    if (tasks.length === 0) {
        return (
            <div className="task-list">
                <p className="task-list__empty">No tasks available. Please add a task.</p>
            </div>
        )
    }

    return (
        <div className="task-list">
            {tasks.map(task => 
                <TaskItem
                    key={task.id} 
                    id={task.id}
                    title={task.title} 
                    completed={task.completed}  
                />
            )}
        </div>
    )
}

export default TaskList;`} />
				</ListItem>

				<ListItem>Create a <span className="code-block fw-600">TaskList.css</span> file:
					<CodeBlock code={`
.task-list {
    margin-top: 1.5rem;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    background: #f8fafc;
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    margin-left: auto;
    margin-right: auto;
    min-height: 180px;
    border: 1px solid #e0e7ef;
}

.task-list__empty {
    text-align: center;
    color: #000;
    font-style: italic;
    margin-top: 2.5rem;
    font-size: 1.1rem;
    letter-spacing: 0.02em;
    border-radius: 8px;
    padding: 1.2rem 0.5rem;
    box-shadow: 0 1px 4px rgba(255, 215, 64, 0.08);
}`} />
				</ListItem>

				<ListItem>The taskList component is styled using the <span className="code-block fw-600">TaskList.css</span> file.</ListItem>
				<ListItem>The taskList component takes in an array of tasks as a prop and renders each task using the TaskItem component.</ListItem>

				<ListItem>If there are no tasks, it displays a message indicating that no tasks are available.</ListItem>

			</ul>

			<p className="stress">Next, we will create a <span className="stress">TaskItem</span> component to represent individual tasks.</p>

			<ul>
				<ListItem>Add a <span className="code-block fw-600">TaskItem.tsx</span> file to represent individual tasks.
					<CodeBlock code={`import './TaskItem.css';

interface Props {
    key: string
    id: string;
    title: string;
    completed: boolean;
}

const TaskItem = ({id, title, completed, onToggle, onDelete} : Props) => {
    return (
        <div className="task-item">
            <input type='checkbox' className='task-item__checkbox' checked={completed} />
            <span className={completed ? 'task-item__completed' : undefined}>{title}</span>
        </div>
    )
}

export default TaskItem;`} />
				</ListItem>
				<ListItem>Create a <span className="stress">TaskItem.css</span> file to style individual task items.
					<CodeBlock code={`.task-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  transition: background 0.2s;
  gap: 8px;
}

.task-item__completed {
  opacity: 0.6;
  text-decoration: line-through;
}

.task-item span {
  font-size: 1rem;
  color: #333;
}

.task-item:hover {
  background: #f5f5f5;
}

.task-item__checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #6397cc;
  border-radius: 80%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-item__checkbox:hover {
  cursor: pointer;
  border-color: #4078c0;
}

.task-item__checkbox--checked {
  background: #6397cc;
  border-color: #6397cc;
}

.task-item__delete {
    margin-left: auto;
    background: transparent;
    border: none;
    color: #e74c3c;
    font-size: 2rem;
    cursor: pointer;
}`}  />
				</ListItem>

			</ul>

			<p className="stress">Finally, we will update the <span className="stress">TodoList</span> component to use the <span className="stress">TaskList</span> component.</p>

			<ul>
				<ListItem>Update the <span className="stress">TodoList</span> component to use the <span className="stress">TaskList</span> component.
					<CodeBlock code={`import { useState } from "react";
import TaskList from "./TaskList";

export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

const INITIAL_TASKS: TodoItem [] = [
    { id: "task1", title: "Go through today's schedule", completed: false },
    { id: "task2", title: "Teach full stack course at Leapfrog Connect", completed: true }
]


const TodoList = () => {
    const [tasks, setTasks] = useState<TodoItem[]>(INITIAL_TASKS);
    return (
        <div>
            <TaskList tasks={tasks} />
        </div>
    )
}

export default TodoList;`} />
				</ListItem>
			</ul>

			<p className="stress">Up until now, we have a list of todoItems that we are rendering using the TaskList component.</p>

			<h2>Adding a Form to Add New Tasks</h2>
			<p>The next step is to add a form to allow addition of new items.</p>

			<p className="stress">First, let's update the to add a logic to handle adding new tasks.</p>

			<ul>
				<ListItem>We will first update the <span className="stress">TodoList.tsx</span> to add a logic to handle adding new tasks.
					<CodeBlock code={`import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

const INITIAL_TASKS: TodoItem [] = [
    { id: "task1", title: "Go through today's schedule", completed: false },
    { id: "task2", title: "Teach full stack course at Leapfrog Connect", completed: true }
]


const TodoList = () => {
    const [tasks, setTasks] = useState<TodoItem[]>(INITIAL_TASKS);

    const handleTaskAdd = (title: string) => {
        const newTask: TodoItem = {
            id: crypto.randomUUID(), // Generating a random id for the new task
            title,
            completed: false
        }

        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    return (
        <div>
            <TaskForm onAdd={handleTaskAdd} />

            <TaskList tasks={tasks} />
        </div>
    )
}

export default TodoList;`} />

				</ListItem>

				<ListItem>In the above code, we define a function <span className="stress">handleTaskAdd</span> that creates a new task and updates the state with the new list of tasks.</ListItem>
				<ListItem><span className="stress">Immutability</span> is maintained by creating a new array with the new task instead of modifying the existing state directly.
					<ul>
						<ListItem>Immutability is important because it helps React detect changes in state more efficiently, leading to better performance and predictable UI updates.</ListItem>
						<ListItem>If we directly mutate the state, React may not detect the change and the UI might not update as expected.</ListItem>
						<ListItem>If the code was something like this,
							<CodeBlock code={`const handleTaskAdd = (title: string) => {
	const newTask: TodoItem = {
		id: crypto.randomUUID(), // Generating a random id for the new task
		title,
		completed: false
	}

	tasks.push(newTask); // Directly mutating the state (not recommended)

	setTasks(tasks); // React may not detect the change
}`} />
						</ListItem>
					</ul>
				</ListItem>
				
				<ListItem>We then pass this function as a prop to the <span className="stress">TaskForm</span> component, which will call it when a new task is submitted.</ListItem>

			</ul>

			<p className="stress">Create a new component called <span className="stress">TaskForm.tsx</span> inside src/components to handle task addition.</p>
			<ul>
				<ListItem>We will create a <span className="stress">TaskForm.tsx</span> file to add new tasks.
					<CodeBlock code={`import { useState } from "react";
import "./TaskForm.css";

interface TaskFormProps {
    onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: TaskFormProps) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Prevent adding empty tasks
        if (title.trim() === "") {
            return;
        } 

        onAdd(title);
        setTitle(""); // Clear the input field after adding
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input 
                type="text" 
                placeholder="Add new todo..." 
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="task-form__input"
            />
            <button type="submit" className="task-form__submit">Add Todo</button>
        </form>
    );
}

export default TaskForm;`} />
				</ListItem>

				<ListItem>Create a <span className="stress">TaskForm.css</span> file to style the form.
						<CodeBlock code={`.task-form {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0.75rem 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    max-width: 650px;
    margin: 0 auto;
    border: 1px solid #e0e7ef;
}

.task-form__input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;
}


.task-form__input:focus {
  border-color: #00c853;
  outline: none;
}


.task-form__submit {
  padding: 0.5rem 1rem;
  background: #00c853;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.task-form__submit:hover {
  background: #009e3a;
}
`} />
				</ListItem>

				<ListItem>The TaskForm.tsx component takes a prop called <span className="stress">onAdd</span>, which is a function to add a new task.</ListItem>
				<ListItem>It maintains its own state for the input field and calls <span className="stress">onAdd</span> with the new task title when the form is submitted.</ListItem>
				<ListItem>The TaskForm.tsx is a <span className="stress">controlled component.</span>
					<ul>
						<ListItem>In a controlled component, the form data is handled by the React component's state rather than the DOM.</ListItem>
						<ListItem>This allows for more control over the form inputs and makes it easier to manage and validate user input.</ListItem>
						<ListItem>When the user types in the input field, the <span className="stress">onChange</span> event updates the component's state with the new value.</ListItem>
						<ListItem>When the form is submitted, the <span className="stress">handleSubmit</span> function is called, which prevents the default form submission behavior and calls the <span className="stress">onAdd</span> function with the current input value.</ListItem>
						<ListItem>In the code, the input field's value is controlled by the component's state, making it a controlled component.</ListItem>
						<ListItem>The input element's value is set to the state variable (<span className="stress">title</span>), and any changes to the input update the state.</ListItem>
					</ul>
				</ListItem>
			</ul>

			<div>
				<h2>Adding Task Toggle & Task Deletion</h2>

				<p>Next, we will add the ability to toggle task completion and delete tasks.</p>

				<p className="stress">Let's first update the TodoList.tsx file:</p>

				<ul>
					<ListItem>
						Update the <span className="stress">TodoList.tsx</span> file to add logic for toggling task completion and deleting tasks.
									<CodeBlock code={`import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

const INITIAL_TASKS: TodoItem [] = [
    { id: "task1", title: "Go through today's schedule", completed: false },
    { id: "task2", title: "Teach full stack course at Leapfrog Connect", completed: true }
]


const TodoList = () => {
    const [tasks, setTasks] = useState<TodoItem[]>(INITIAL_TASKS);

    const handleTaskAdd = (title: string) => {
        const newTask: TodoItem = {
            id: crypto.randomUUID(), // Generating a random id for the new task
            title,
            completed: false
        }

        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    // Function to toggle task completion status
    const handleToggleTaskCompletion = (id: string) => {
        // Logic to toggle the 'completed' status of the task with the given id. We return a new array with the updated tasks
        const updatedTasks = tasks.map(item => {
            const taskToMatch = item.id === id;

            if (taskToMatch) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            else {
                return item;
            }
        });

        setTasks(updatedTasks);
    }

    // Function to delete a task
    const handleDeleteTask = (id: string) => {
        // Logic to remove the task with the given id from the tasks array
        const updatedTasks = tasks.filter(task => task.id !== id);

        setTasks(updatedTasks);
    }

    return (
        <div>
            <TaskForm onAdd={handleTaskAdd} />

            <TaskList tasks={tasks} onToggle={handleToggleTaskCompletion} onDelete={handleDeleteTask} />
        </div>
    )
}

export default TodoList;`} />
					</ListItem>

					<ListItem>In the above code, we added two new functions: <span className="stress">handleToggleTaskCompletion</span> and <span className="stress">handleDeleteTask</span>. These functions update the state to toggle the completion status of a task and to delete a task, respectively.</ListItem>
					<ListItem>We then pass these functions as props to the <span className="stress">TaskList</span> component, which will call them when a task is toggled or deleted.</ListItem>
				</ul>

				<p className="stress">Next, we will update the TaskList.tsx file:</p>

				<ul>
					<ListItem>Update the <span className="stress">TaskList.tsx</span> file to handle toggling and deleting tasks using the functions passed as props.
						<CodeBlock code={`import type { TodoItem } from "./TodoList";
import TaskItem from "./TaskItem";
import "./TaskList.css";

interface TaskListProps {
    tasks: TodoItem[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onToggle, onDelete }: TaskListProps) => {
    // Conditional rendering based on tasks length
    if (tasks.length === 0) {
        return (
            <div className="task-list">
                <p className="task-list__empty">No tasks available. Please add a task.</p>
            </div>
        )
    }

    return (
        <div className="task-list">
            {tasks.map(task => 
                <TaskItem
                    key={task.id} 
                    id={task.id}
                    title={task.title} 
                    completed={task.completed} 
                    onToggle={onToggle} 
                    onDelete={onDelete} 
                />
            )}
        </div>
    )
}

export default TaskList;`} />
					</ListItem>
					<ListItem>In the <span className="stress">TaskList.tsx</span> file, we updated the component to accept two new props: <span className="stress">onToggle</span> and <span className="stress">onDelete</span>. These props are functions that handle toggling the completion status of a task and deleting a task, respectively. We then pass these functions down to each <span className="stress">TaskItem</span> component.</ListItem>
				</ul>

				<p className="stress">We will then update the TaskItem.tsx file to handle toggling and deleting tasks using the functions passed as props.</p>

				<ul>
					<ListItem>Let's first install a library called <span className="stress">react-icons</span> to use icons in our application.</ListItem>
					<ListItem>Run the command <code className="code-block fw-600">npm install react-icons</code> to install react icons in our app.</ListItem>
					<ListItem>Update the <span className="stress">TaskItem.tsx</span> file to handle toggling and deleting tasks using the functions passed as props.
							<CodeBlock code={`import './TaskItem.css';
import { MdDelete } from "react-icons/md";

interface Props {
    key: string
    id: string;
    title: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskItem = ({id, title, completed, onToggle, onDelete} : Props) => {
    return (
        <div className="task-item">
            <input type='checkbox' className='task-item__checkbox' checked={completed} onChange={() => onToggle(id)} />
            <span className={completed ? 'task-item__completed' : undefined}>{title}</span>
            <button className='task-item__delete' onClick={() => onDelete(id)}><MdDelete color='red' /></button>
        </div>
    )
}

export default TaskItem;`} />
					</ListItem>
					<ListItem>In the above code, we updated the TaskItem component to accept two new props: <span className="stress">onToggle</span> and <span className="stress">onDelete</span>. These props are functions that handle toggling the completion status of a task and deleting a task, respectively. We then use these functions in the checkbox's onChange event and the delete button's onClick event.</ListItem>
				</ul>
			</div>

			<RepoLink link="https://github.com/gyanasluitel/todo-app-codes" name="todo-app" />

			<Assignment>
				<p>Create an income/expense tracker application</p>
				<ul>
					<li>Create a TypeScript react-app using the Vite build tool.</li>
					<li>The app should allow users to track their income or expenses by adding and deleting expense items.</li>
					<li>Each item should have a description, amount, date and category (whether it is an income or expense).</li>
					<li>Validate that the amount is a positive number when adding an amount and date is not in the future.</li>
					<li>Implement functionality to add, delete, and display items. The app should clearly show which item is income and which is an expense.</li>
					<li>Make a clean and user-friendly UI for the application.</li>
				</ul>

				<p className="stress">Bonus: Add the ability to filter the list by category (income/expense)</p>
			</Assignment>

        </div>
    )
}

export default ReactTodoApp;