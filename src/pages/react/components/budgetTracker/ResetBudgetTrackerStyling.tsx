import CodeBlock from "src/common/CodeBlock";
import CodeStep from "src/common/CodeStep";
import ListItem from "src/common/ListItem";

const ResetBudgetTrackerStyling = () => {
    return (
        <div className="mt-40">
            <CodeStep>
                <h3>Step 3: Resetting the CSS (Optional)</h3>
            </CodeStep>

            <p>This is an optional step where you can reset the CSS properties of your app to have a clean slate for styling.</p>

            <p>All the source code will go inside the <span className="stress">src</span> folder.</p>
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
    
                <ListItem>Import the reset.css file in the root file <span className="stress">main.tsx</span> file:
                <CodeBlock code={`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./reset.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`} />
                </ListItem>

                <ListItem>Update the styling in the <span className="stress">index.css</span> file. I will also add some additional styling for the app.
                <CodeBlock code={`:root {
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  font-weight: 400;
  color: #222;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
  height: 100%;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(120deg, #f4f7fd 0%, #e9f0fb 100%);
  box-sizing: border-box;
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(100,108,255,0.08), 0 1.5px 6px rgba(0,0,0,0.04);
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  margin: 2rem auto;
  max-width: 600px;
  border: 1px solid #e0e7ef;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary-btn {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.primary-btn:hover {
  background: #125ea2;
}

.danger-btn {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: background 0.2s;
}
.danger-btn:hover {
  background: #c0392b;
}

.input, .select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.input:focus, .select:focus {
  border-color: #1976d2;
  outline: none;
}
`} />
                </ListItem>

            </ul>
        </div>
    )
}

export default ResetBudgetTrackerStyling;