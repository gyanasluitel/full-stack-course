import { Link } from 'react-router';
import gitBranch1 from '../assets/git-branch1.png';
import gitBranch2 from '../assets/git-branch2.png';

const GitWorkflow = () => {
    return (
        <div className="container">
            <h1>Git & GitHub</h1>

            <div>
                <h2 className="title">What is Git and why it matters?</h2>
                <p>Git is a <span className="stress">distributed version control system</span> that helps developers track changes in their codebase, collaborate with others, and manage different versions of their projects efficiently.</p>

                <p>Consider Git as <span className="stress">save points</span> for your code. Every real project uses Git in their development process - as essential as oxygen is for human existence.</p>

                <div className="mt-40">
                    <p className="stress">Before Git:</p>
                    <p>You might have to manually manage different versions of your files, often leading to confusion and errors.</p>
                    <ul>
                        <li>project_v1</li>
                        <li>project_final</li>
                        <li>project_final_really</li>
                        <li>project_final_really_final</li>
                    </ul>
                </div>
                        
                <div className="mt-40">
                    <p className="stress">After Git:</p>
                    <ol>
                        <li><span className="stress">Working Directory</span> - Local project folder where you edit files.</li>
                            <ul>
                                <li>You create, modify, or delete files here</li>
                                <li>Git sees these changes but does not track changes automatically</li>
                                <li>Files can be:</li>
                                    <ul>
                                        <li><span className="stress">Untracked</span>  (New files not yet added to Git)</li>
                                        <li><span className="stress">Modified</span> (Existing files that have been changed)</li>
                                    </ul>
                            </ul>
                        <li className="mt-20"><span className="stress">Staging Area</span> - Preview area where you prepare changes that will go into the next commit.</li>
                            <ul>
                                <li>You explicitly add changes using <code className="code-block">git add (./fileName)</code></li>
                                <li>Allows partial commits (Don't have to commit everything)</li>
                                <li>Think of it as a<span className="stress"> snapshot being prepared for commit</span></li>
                            </ul>
                        <li className="mt-20"><span className="stress">Commit</span> - Permanent record of your project's history</li>
                            <ul>
                                <li>A commit is a snapshot of the staged changes</li>
                                <li>Each commit has:</li>
                                    <ul>
                                        <li>A unique ID (hash)</li>
                                        <li>A commit message describing the changes</li>
                                        <li>Metadata (author, timestamp)</li>
                                    </ul>
                            </ul>
                    </ol>

                    <div className="mt-40">
                        <p className="stress">Flow Summary:</p>
                        <p className="code-block code-block__light">Working Directory (edit) -----{'>'} Staging Area (git add) -----{'>'} Commit History (git commit)</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-40">
                <h2 className="title">GitHub & Git vs GitHub</h2>
                <ul>
                    <li>Git = Version Control System (VCS)</li>
                    <li>GitHub = Remote hosting + collaboration platform</li>
                </ul>

                <ul>
                    <li>Git works offline</li>
                    <li>GitHub is optional but useful for collaboration</li>
                </ul>

                <div>
                    <p className="stress">Diagram:</p>
                    <p className="code-block code-block__light"> Local Repository &lt;-&gt; Remote Repository (GitHub)</p>
                </div>
            </div>

            <div className="mt-40">
                <h2 className="title">Core Git Commands</h2>

                <p>There are a lot of git commands. Some of the core ones you need to know are:</p>

                <ul>
                    <li><code className="code-block">git init</code> - Initialize a new Git repository</li>
                    <li className="mt-8"><code className="code-block">git status</code> - Check the status of your working directory and staging area</li>
                    <li className="mt-8"><code className="code-block">git add &lt;file(s)&gt;</code> - Add files to the staging area</li>
                    <li className="mt-8"><code className="code-block">git commit -m "message"</code> - Commit staged changes with a descriptive message</li>
                        <ul>
                            <li>Small, meaningful commits are easier to understand and manage</li>
                        </ul>
                    <li className="mt-8"><code className="code-block">git log</code> - View commit history</li>
                    <li className="mt-8"><code className="code-block">git push origin &lt;branch-name&gt;</code> - Push local commits to the remote repository</li>

                    <li className="mt-8"><code className="code-block">git branch</code> - List, create, or delete branches</li>
                    <li className="mt-8"><code className="code-block">git checkout -b &lt;branch-name&gt;</code> - Create and switch to a new branch</li>
                    <li className="mt-8"><code className="code-block">git checkout &lt;branch-name&gt;</code> - Switch to a different branch</li>
                    <li className="mt-8"><code className="code-block">git merge &lt;branch-name&gt;</code> - Merge changes from one branch into the current branch</li>

                    <li className="mt-8"><code className="code-block">git fetch</code> - Download changes from remote without merging</li>
                    <li className="mt-8"><code className="code-block">git pull origin &lt;branch-name&gt;</code> - Fetch and merge changes from the remote repository</li>

                    <li className="mt-8"><code className="code-block">git remote add origin &lt;repository-URL&gt;</code> - Link local repository to a remote GitHub repository</li>

                    <li className="mt-8"><code className="code-block">git reset</code> - Moves HEAD and optionally unstages changes</li>
                    <li className="mt-8"><code className="code-block">git revert</code> - Creates a new commit that undoes changes from a previous commit</li>
                </ul>

                <p className="stress mt-20">Lets do a quick demo!</p>

                <p><span className="stress mt-40">Assignment:</span>Go through different git commands and understand their usage</p>
            </div>


            <div>
                <h2 className="title">Classroom Activity</h2>

                <ul>
                    <li>Install Git in your machine</li>
                    <li className='mt-8'>Configure git</li>
                    <li className='mt-8'>Create a GitHub account (if you don't have one)</li>
                    <li className='mt-8'>Link git & GitHub</li>
                    <li className='mt-8'>Install GitHub CLI</li>

                    <li className='mt-8'>Create a new directory in your local machine</li>
                    <li className='mt-8'>Initialize a git repository</li>
                    <li className='mt-8'>Create a README file and add some content</li>
                    <li className='mt-8'>Stage and commit the changes</li>

                    <li className='mt-8'>Add local repository to GitHub
                        <ul>
                            <li><span className='code-block'>gh auth login</span></li>
                            <li><span className='code-block'>gh repo create</span></li>
                        </ul>
                    </li>

                    <li className='mt-8'>Make some changes</li>
                    <li className='mt-8'>Stage and commit the changes</li>
                    <li className='mt-8'>Push the changes to GitHub</li>
                </ul>

                <div className='title'>Resources:</div>
                <ul>
                    <li><Link className='external-link' to={{ pathname: "https://docs.github.com/en/get-started/git-basics/set-up-git"}} target='_blank'>Set up Git</Link></li>
                    <li><Link className='external-link' to={{ pathname: "https://cli.github.com/"}} target='_blank'>GitHub CLI</Link></li>
                    <li><Link className='external-link' to={{ pathname: "https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github"}} target='_blank'>Adding Locally Hosted Code to GitHub</Link></li>
                </ul>

            </div>

            <div className='mt-40'>
                <h2 className="title">Branching Basics</h2>
                <p>Branches in Git allow you to create separate lines of development within a repository. They enable you to work on new features, bug fixes, or experiments without affecting the main codebase.</p>
                <p>Consider branches as <span className="stress">parallel timelines.</span></p>

                <div className='mt-40'>
                    <p className='stress'>Common Branching Strategies:</p>
                    <div>
                        <p className='stress'>Strategy 1: <span className="stress">Main/Feature Branching</span></p>
                        <img src={gitBranch1} />

                        <ul>
                            <li><span className="stress">Main Branch (main/master)</span> - The primary branch where the stable code resides.</li>
                            <li><span className="stress">Feature Branches</span> - Created for specific features or tasks. They are branched off from the main branch.</li>
                        </ul>
                    </div>

                    <div>
                        <p className='stress mt-20'>Strategy 2: <span className="stress">Environment Branching (dev/qa/uat/prod)</span></p>
                        <img src={gitBranch2} />
                    </div>
                </div>
            </div>

            <div className='mt-40'>
                <h2 className='title'>GitHub Workflow</h2>
                <p className="code-block code-block__light">Push code - Pull code - Pull Requests</p>
                <p className='stress'>Demo: PR & code reviews. How reviews work in a collaborative environment.</p>
            </div>

            <div>
                <h2 className='title'>Common Mistakes</h2>

                <ul>
                    <li>Committing <span className='code-block'>node_modules</span></li>
                    <li>Pushing <span className='code-block'>secrets (env file)</span></li>
                    <li>Large commits with unclear messages</li>
                    <li>Not pulling latest changes before starting working</li>
                        <ul>
                            <ol>Make sure your <span className='code-block'>local main branch</span> is always in sync with <span className='code-block'>remote (origin) main</span></ol>
                        </ul>
                    <li>Ignoring merge conflicts</li>
                    <li>Unclear PR requests - unclear titles/descriptions/lack of evidences</li>
                </ul>
            </div>
        </div>
    )
}

export default GitWorkflow;