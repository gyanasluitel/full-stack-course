import CodeBlock from "src/common/CodeBlock";
import ListItem from "src/common/ListItem";
import DOM from "src/assets/react/dom.png";

const VirtualDOM = () => {
    return (
        <div>
            <div>
                <h2>What Problem is React solving?</h2>

                <ul>
                    <ListItem>Updating the DOM can be slow and inefficient, especially for complex applications with many UI elements.</ListItem>
                    <ListItem>Every DOM change can trigger:
                        <ul>
                            <ListItem>Layout recalculations - recalculating the positions and sizes of elements</ListItem>
                            <ListItem>Repaints - redrawing pixels on the screen</ListItem>
                            <ListItem>Reflows - changes to the layout of the page</ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>If you do this repeatedly, especially in large apps, the UI will be slow</ListItem>

                    <ListItem>React solves this problem by using a <span className="stress">Virtual DOM</span> to minimize direct DOM manipulations.</ListItem>

                    <ListItem>React's idea: Let me <span className="stress">figure out the minimal changes first</span>, then touch the real DOM only when absolutely needed</ListItem>
                </ul>
            </div>

            <div>
                <h2>What is Virtual DOM?</h2>

                    <ul>
                        <ListItem>The Virtual DOM is a lightweight JavaScript object</ListItem>
                        <ListItem>It is a copy of the real DOM in memory - <span className="stress"></span>A representation of the UI , not the real DOM.</ListItem>

                        <ListItem>Example JSX:</ListItem>
                        <CodeBlock code={`<h1>Hello World</h1>`} />

                        <ListItem>Corresponding Virtual DOM representation:</ListItem>
                        <CodeBlock code={`{
  type: 'h1',
  props: {
    children: 'Hello World'
  }
}`} />

                        <ListItem>When you write React components using JSX, React creates a Virtual DOM representation of the UI elements.</ListItem>
                        <ListItem>React keeps this Virtual DOM <span className="stress">in memory</span>, not in the browser DOM.</ListItem>

                        <ListItem>When the state/props of a component changes, React updates the Virtual DOM first.</ListItem>
                        <ListItem>React then compares the updated Virtual DOM with the previous DOM version using a process called <span className="stress">reconciliation</span>.</ListItem>
                        <ListItem>React identifies the differences (or "diffs") between the two Virtual DOM versions.</ListItem>
                        <ListItem>Finally, React updates only the parts of the real DOM that have changed based on the diffs it found.</ListItem>

                        <ListItem>This approach minimizes direct DOM manipulations, improving performance and ensuring a smoother user experience.</ListItem>

                        <ListItem>In summary, the Virtual DOM is a key concept in React that allows for efficient UI updates by minimizing direct interactions with the real DOM.</ListItem>
                    </ul>
            </div>

            <div>
                <h2>How React Updates UI (High-Level Flow)</h2>

                <ul>
                    <ListItem>State/props change</ListItem>
                    <ListItem>React creates a <span className="stress">new Virtual DOM tree</span></ListItem>
                    <ListItem>React calculates it with the <span className="stress">previous Virtual DOM</span></ListItem>
                    <ListItem>React calculates the <span className="stress">minimal set of changes</span></ListItem>
                    <ListItem>React updates the <span className="stress">real DOM</span> with those changes only</ListItem>
                </ul>
            </div>

            <div>
                <h2>Diffing (How React compares tress)</h2>

                <p><span className="stress">Diffing</span> is the algorithm React uses to compare:</p>
                <ul>
                    <li>Old Virtual DOM</li>
                    <li>New Virtual DOM</li>
                </ul>

                <p className="stress">Key assumptions React makes:</p>

                <ul>
                    <ListItem>Different element types = different trees
                        <ul>
                            <ListItem><code className="code-block fw-600">{`<div /> -> <span />`}</code></ListItem>
                            <ListItem>If the element types are different, React will tear down the old tree and build the new tree from scratch.</ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>Same element type = Compare props & children
                        <ul>
                            <ListItem><code className="code-block fw-600">{`<button className="a" />`}</code></ListItem>
                            <ListItem><code className="code-block fw-600">{`<button className="b" />`}</code></ListItem>
                            <ListItem>React updates only <span className="stress">className</span></ListItem>
                        </ul>
                    </ListItem>

                    <ListItem>Keys help identify elements in lists
                        <ul>
                            <ListItem>When rendering lists of elements, React uses keys to identify which items have changed, been added, or removed.</ListItem>
                            <ListItem>This helps React optimize updates by reusing existing elements instead of recreating them.</ListItem>
                            <ListItem><code className="code-block fw-600">{`items.map(item => <li key={item.id}>{item.name}</li>)`}</code></ListItem>
                            <ListItem>WWithout keys, React would have to recreate the entire list, leading to less efficient updates.</ListItem>
                        </ul>
                    </ListItem>
                </ul>
            </div>

            <div>
                <h2>Reconciliation (Applying changes)</h2>

                <p>Reconciliation is the process where:</p>
                <ul>
                    <ListItem>React takes the diff result</ListItem>
                    <ListItem>Decides what to update, remove, or insert</ListItem>
                    <ListItem>Apply changes to the real DOM accordingly</ListItem>
                </ul>

                <p className="stress">Thing to note: React does <span className="stress">NOT</span> update DOM node-by-node immediately; instead, it <span className="stress">batches updates</span> for better performance.</p>
                
            </div>

            <div>
                <h2>Render phase vs Commit phase</h2>
                
                <p>Render phase (Pure & interruptible)</p>
                <ul>
                    <ListItem>Builds new Virtual DOM</ListItem>
                    <ListItem>Diffs with previous Virtual DOM</ListItem>
                    <ListItem>Determines changes needed</ListItem>
                    <ListItem>No DOM mutations</ListItem>
                    <ListItem>Can be paused, aborted, or restarted</ListItem>
                </ul>

                <p>Commit Phase (Synchronous)</p>
                <ul>
                    <ListItem>Applies changes to the real DOM</ListItem>
                    <ListItem>Updates DOM nodes</ListItem>
                    <ListItem>Invokes lifecycle methods and effects, running things like <code>useEffect</code>, <code>componentDidMount</code>, <code>componentDidUpdate</code></ListItem>
                    <ListItem>Cannot be interrupted</ListItem>
                </ul>
            </div>

            <div>
                <h2>Why is this faster than manual DOM updates?</h2>

                <ul>
                    <li>Manual DOM updates:
                        <ul>
                            <li><code className="code-block fw-600">{`document.getElementById("title").innerText = "Hello";`}</code></li>
                            <li>Browser recalculates layout immediately.</li>
                            <li>Causing potential performance issues with frequent updates.</li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li>With React:</li>
                    <ul>
                        <li>Computes changes in memory</li>
                        <li>Applies minimal DOM updates</li>
                        <li>Batches multiple state updates</li>
                    </ul>
                </ul>
            </div>

            <div>
                <img src={DOM} alt="React Virtual DOM Illustration" />
            </div>
        </div>
    )
}

export default VirtualDOM;