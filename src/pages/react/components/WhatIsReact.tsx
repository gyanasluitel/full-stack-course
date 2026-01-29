import ListItem from "src/common/ListItem";
import SPAs from "src/assets/react/SPAs.png";
import traditionalWeb from "src/assets/react/traditionalWeb.png";

const WhatIsReact =  () => {
    return (
        <div>
            <div>
                <h2>What is React? Why is it important?</h2>
                
                <p>React is a <span className="stress">UI library</span> for building interfaces using <span className="stress">components</span> (small reusable pieces of code).</p>

                <p>It helps you to:</p>
                <ul>
                    <ListItem>Build complex UIs by composing components</ListItem>
                    <ListItem>Ensures the UI stays consistent by making rendering predictable and entirely based on your data</ListItem>
                    <ListItem>Efficiently updates only the parts of the UI that change when your data changes</ListItem>
                </ul>

                <p>React was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.</p>

                <div>
                    <h3 className="title">React and SPAs</h3>

                    <img src={SPAs} alt="Single Page Applications" />


                    <ul>
                        <ListItem>React is often used to build <span className="stress">Single Page Applications (SPAs)</span>, where the entire application runs on a single web page, providing a seamless user experience without full page reloads.</ListItem>
                        <ListItem>In SPAs, the <span className="stress">server only sends one HTML page</span> to the client (browser) for the website to run fully. React then dynamically updates the content on the page as the user interacts with the app, <span className="stress">without requiring a full page reload.</span></ListItem>
                        <ListItem>Any kind of browser data changes and user interactivity (like click events) are handled on the client side by React, without a need to reload the page.</ListItem>
                        <ListItem>If you navigate from one page to the other (routing), those new pages are <span className="stress">not sent from the server</span>, instead React changes the content based on the route on the client side.</ListItem>
                        <ListItem>This approach <span className="stress">improves user experience by providing faster navigation and interaction within the app.</span></ListItem>

                        <ListItem>In <span className="stress">traditional web applications</span>, each time a user navigates to a new page, the browser requests a new HTML page from the server, which then reloads the entire page, which is slow.</ListItem>

                        <ListItem>If you navigate from homePage to aboutPage, the browser requests a new HTML page for the aboutPage from the server, causing a full page reload.</ListItem>

                        <img src={traditionalWeb} alt="Traditional Web Applications" />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default WhatIsReact;