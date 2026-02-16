import Assignment from "src/common/Assignment";
import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";
import NavButton from "src/common/NavButton";

const Routing = () => {
    return (
        <div className="container">
            <NavButton to="/react-tutorial" text="React Tutorial" />

            <h1>React Router</h1>

            <p>In this lesson, we will be learning about React Router, a popular library for handling routing in React applications.</p>

            <ul>
                <ListItem>React Router is a standard routing library for React. It lets you:
                    <ul>
                        <ListItem>Create navigable views/pages in a single-page app (SPA)</ListItem>
                        <ListItem>Map URLs to specific components</ListItem>
                        <ListItem>Handle dynamic routing based on URL parameters</ListItem>
                        <ListItem>Implement nested routes for complex layouts</ListItem>
                    </ul>
                </ListItem>
            </ul>

            {/* Setting up React Router and basic navigation */}
            <div>
                <h2>Setting up React Router</h2>

                <p>To get started with React Router, you need to install the library:</p>

                <CodeBlock code={`npm install react-router-dom`} />

                <p>Once you have React Router installed, you can set up your routes in your main application file (e.g., App.tsx) using the <span className="stress">BrowserRouter</span>, <span className="stress">Routes</span>, and <span className="stress">Route</span> components.</p>

                <CodeBlock code={`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`} />

                <p>In this example, we have defined three routes: the home page ("/"), the about page ("/about"), and the contact page ("/contact"). Each route is associated with a specific component that will be rendered when the route is accessed.</p>
            </div>


            {/* Nested routes and navigation */}
            <div>   
                <h2>Nested Routes and Navigation</h2>
                <p>You can also create nested routes to handle more complex layouts. For example:</p>

                <CodeBlock code={`<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>`} />

                <p>In this example, we have a dashboard route that has two nested routes: profile and settings. When you navigate to "/dashboard/profile", the Profile component will be rendered within the Dashboard component.</p>

                <p>To render the nested routes, you can use the <span className="stress">Outlet</span> component in the parent component (e.g., Dashboard) where you want the child components to be rendered:</p>

                <CodeBlock code={`import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}`} />

                <p>In this example, the <span className="stress">Outlet</span> component is used to render the child routes (Profile and Settings) within the Dashboard component.</p>

            </div>


            {/* Navigation and URL parameters */}
            <div>
                <h2>Navigation and URL Parameters</h2>
                <p>To navigate between routes, you can use the <span className="stress">Link</span> component from React Router:</p>

                <CodeBlock code={`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}`} />

                    <p>React Router also provides the <span className="stress">NavLink</span> component, which is similar to <span className="stress">Link</span> but allows you to apply active styles to the currently active link. This is useful for highlighting the active route in your navigation menu.</p>
                    <CodeBlock code={`import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
    </nav>
  );
}`} />

                <p>In this example, the <span className="stress">NavLink</span> component is used to apply active styles to the currently active link. The <span className="stress">className</span> prop is a function that receives an object with an <span className="stress">isActive</span> property, which indicates whether the link is active. You can use this property to conditionally apply a CSS class to the active link.</p>

            </div>

            {/* Dynamic Routing and URL Parameters */}
            <div>
                <h2>Dynamic Routing and URL Parameters</h2>
                <p>React Router also allows you to define dynamic routes that can accept URL parameters. For example:</p>

                <CodeBlock code={`<Route path="/user/:id" element={<UserProfile />} />`} />

                <p>In this example, the ":id" part of the route is a URL parameter that can be accessed in the UserProfile component using the <span className="stress">useParams</span> hook:</p>

                <CodeBlock code={`import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}`} />

                <p>In this example, the <span className="stress">useParams</span> hook is used to extract the "id" parameter from the URL, which can then be used to fetch user data or display relevant information based on the user ID.</p>  

            </div>

            {/* Redirecting routes using the Navigate component */}
            <div>
                <h2>Redirecting Routes</h2>
                <p>React Router also provides a way to redirect routes using the <span className="stress">Navigate</span> component. This can be useful for redirecting users to a different route based on certain conditions (e.g., after a successful login).</p>

                <CodeBlock code={`import { Navigate } from 'react-router-dom';

function Login() {
  const isLoggedIn = // logic to determine if user is logged in

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      {/* Login form goes here */}
    </div>
  );
}`} />

                <p>In this example, if the user is already logged in, they will be redirected to the "/dashboard" route using the <span className="stress">Navigate</span> component.</p>

                <p>For programmatic navigation (e.g., navigating after a form submission), you can use the <span className="stress">useNavigate</span> hook provided by React Router:</p>

                <CodeBlock code={`import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic to handle form submission

    // After successful submission, navigate to the thank you page
    navigate('/thank-you');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields go here */}
      <button type="submit">Submit</button>
    </form>
  );
}`} />

                <p>In this example, the <span className="stress">useNavigate</span> hook is used to get access to the navigate function, which can be called to programmatically navigate to a different route (in this case, the "/thank-you" route) after a successful form submission.</p>

            </div>

            {/* URL search parameters and how to access them using the useLocation hook */}

            <div>
                <h2>URL Search Parameters</h2>
                <h3>Using the useLocation Hook</h3>
                <p>In addition to URL parameters, React Router also allows you to work with URL search parameters (query parameters) using the <span className="stress">useLocation</span> hook. This can be useful for handling query parameters in your routes.</p>
                    <p>React Router also allows you to work with URL search parameters using the <span className="stress">useLocation</span> hook. This can be useful for handling query parameters in your routes.</p>

                    <CodeBlock code={`import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  return <div>Search results for: {query}</div>;
}`} />

                <p>In this example, the <span className="stress">useLocation</span> hook is used to access the current location object, which contains the search property with the URL search parameters. The <span className="stress">URLSearchParams</span> API is then used to extract the value of the "query" parameter from the URL.</p>

                <h3>Using the useSearchParams Hook</h3>
                <p>React Router also provides the <span className="stress">useSearchParams</span> hook, which is a convenient way to work with URL search parameters. It allows you to read and update the search parameters in a more straightforward way:</p>

                <CodeBlock code={`import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <div>Search results for: {query}</div>
      {/* Search input and button to trigger handleSearch */}
    </div>
  );
}`} />

                <p>In this example, the <span className="stress">useSearchParams</span> hook returns an array with the current search parameters and a function to update them. You can use the setSearchParams function to update the search parameters in the URL, which will trigger a re-render of the component with the new search parameters.</p>

            </div>


            {/* Handling 404 Not Found Routes */}
            <div>
                <h2>Handling 404 Not Found Routes</h2>
                <p>To handle 404 Not Found routes, you can define a catch-all route that will match any undefined routes. This is typically done by using the "*" path:</p>

                <CodeBlock code={`<Route path="*" element={<NotFound />} />`} />

                <p>In this example, any route that does not match the defined routes will render the NotFound component, which can display a message indicating that the page was not found.</p>


                <p>React Router also provides features for handling dynamic routing based on URL parameters, redirecting routes, and more. You can refer to the official React Router documentation for more details and advanced usage.</p>
            </div>

            <Assignment>
                <p>Create a small personal portfolio app with multiple pages. Minimum requirements:</p>
                <ul>
                    <li>Home page: Show a welcome message, your name & image</li>
                    <li>About page: Show a short bio or intro of yourself</li>
                    <li>Contact page: Show your email & social links</li>
                </ul>
            </Assignment>
        </div>
    )
}

export default Routing;