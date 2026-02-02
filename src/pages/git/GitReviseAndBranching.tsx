import LinearGitFlow from "../../assets/git/linearGitFlow.png";
import fastForwardMerge from "../../assets/git/fast-forward-merge.png";
import branching1 from "../../assets/git/branching1.png";
import branching2 from "../../assets/git/branching2.png";
import branching3 from "../../assets/git/branching3.png";
import branching4 from "../../assets/git/branching4.png";
import ffMerged from "../../assets/git/ff-merged.png";
import threeWayBefore from "../../assets/git/threeWayBefore.png";
import threeWayAfter from "../../assets/git/threeWayAfter.png";
import squashAndMergeBefore from "../../assets/git/squashAndMergeBefore.png";
import squashAndMergeAfter from "../../assets/git/squashAndMergeAfter.png";
import rebaseAndMergeBefore from "../../assets/git/rebaseAndMergeBefore.png";
import rebaseAndMergeAfter from "../../assets/git/rebaseAndMergeAfter.png";
import NavButton from "src/common/NavButton";

const GitReviseAndBranching = () => {
    return (
        <div className="container">
            <NavButton to="/" text="Home" />

            <h1>Recap on yesterday's Git concepts</h1>

            <p>We installed and configured git in our machine, connected Git with GitHub. Installed GitHub CLI (used to create repository in GitHub using command line)</p>

            <div className="mt-40">
                <div>
                    <p className="stress">Initialized git in a local directory and pushed it to create a remote repository in GitHub (Classroom Activity):</p>

                    <ul>
                        <li>Created a new directory <span className="stress">locally</span></li>
                        <li>Initialized git in that directory using <code className="code-block">git init -b main</code></li>
                        <li>Created new files in the directory</li>
                        <li>Added those files to staging area using <code className="code-block">git add .</code></li>
                        <li>Committed those files to local repository using <code className="code-block">git commit -m "Initial commit"</code></li>
                        <li>Pushed our local directory to GitHub to create a remote repository using the command <code className="code-block">gh repo create</code></li>
                        <li>Verified the files are pushed to remote repository in GitHub</li>
                        <li>Made changes to the file by updating the file</li>
                        <li>Staying on the same branch, added and committed those changes using <code className="code-block">git add .</code> and <code className="code-block">git commit -m "commit message"</code></li>
                        <li>Pushed those changes to remote repository using <code className="code-block">git push origin main</code></li>

                        <li>Commit head moved from <code className="code-block">C1</code> to <code className="code-block">C3</code></li>
                        <li>Commit head refers to the latest commit in the current branch. It is Git's special pointer that indicates the current position in the commit history.</li>
                    </ul>

                    <div>
                        <img src={LinearGitFlow} alt="Linear Git Flow" className="mt-20"/>
                    </div>
                </div>


                <div className="mt-40">
                    <p className="stress">Branching & Merging changes in GitHub (Assignment):</p>
                    <ul>
                        <li>Created a new branch in our local directory using <code className="code-block">git checkout -b branch-name</code></li>
                        <li>Made changes to the files in that branch, added and committed those changes using <code className="code-block">git add .</code> and <code className="code-block">git commit -m "commit message"</code></li>
                        <li>Pushed the branch remotely using <code className="code-block">git push origin branch-name</code></li>
                        <li>Created a pull request in GitHub to merge the branch into the main branch</li>
                        <li>Merged the pull request after review</li>

                        <li>The other collaborator switched back to main branch in local using <code className="code-block">git checkout main</code></li>
                        <li>Fetched the latest changes from remote using <code className="code-block">git pull origin main</code></li>
                        <li>Switched to a new branch using <code className="code-block">git checkout -b branch-name</code></li>
                        <li>Edited the existing file, added and committed those changes using <code className="code-block">git add .</code> and <code className="code-block">git commit -m "commit message"</code></li>
                        <li>Pushed those changes to remote using <code className="code-block">git push origin branch-name</code></li>
                        <li>Created and merged a pull request in GitHub to merge the branch into main branch</li>
                    </ul>

                    <div>
                        <div className="flex flex-col">
                            <img src={branching1} alt="Branching in Git" className="mt-20"/>
                            <p className="stress">Created a new branch</p>
                        </div>
                        <div className="flex flex-col">
                            <img src={branching2} alt="Merging in Git" className="mt-20"/>
                            <p className="stress">Created a pull request & merged the branch into main</p>
                        </div>
                        <div className="flex flex-col">
                            <img src={branching3} alt="Branching in Git" className="mt-20"/>
                            <p className="stress">Created a new branch to continue the story</p>
                        </div>
                        <div className="flex flex-col">
                            <img src={branching4} alt="Merging in Git" className="mt-20"/>
                            <p className="stress">Created a pull request & merged the branch into main</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="title">Branching & Merging Strategies</h2>

                <div>
                    <ul>
                        <li>When you work individually, you may probably have only one branch to manage your changes.</li>
                        <li>You probably stay on the main branch, make changes and commit directly to it. Push your changes to GitHub to ensure changes are safe.</li>
                    </ul>       

                    <ul>
                        <li>When you work in a team, you typically create separate branches for each feature or bug fix.</li>
                        <li>Each team member works on their own branch, commits changes, and pushes them to the remote repository.</li>
                        <li>Pull requests are created to review and merge changes into the main branch.</li>
                    </ul>

                    <ul>
                        <li>Sometimes, even when working individually, you might create separate branches for different features or experiments.</li>
                        <li>In such cases, you merge your branches locally using <code className="code-block">git merge branch-name</code></li>
                    </ul>
                </div>

                <div className="stress">Give a quick demo of merging locally with Git</div>

                <h3 className="title">Merging Strategies</h3>
                
                <ul>
                    <li><span className="stress">Fast-forward merge:</span> If the main branch has not progressed since the branch was created, 
                    Git simply moves the main branch pointer forward to the latest commit of the branch being merged. 
                    This results in a linear history without any additional merge commits.

                    <div className="flex flex-col">
                        <img src={fastForwardMerge} alt="Fast Forward Merge in Git" className="mt-20"/>
                        <span className="stress mt-8">Before Merge</span>
                    </div>

                    <div className="flex flex-col">
                        <img src={ffMerged} alt="Fast Forward Merge in Git" className="mt-20"/>
                        <span className="stress mt-8">After Merge</span>
                    </div>
                    </li>

                    <li className="mt-20"><span className="stress">Three-way merge:</span> If the main branch has progressed since the branch was created, Git creates a new merge commit that combines the changes from both branches.
                    This results in a non-linear history with a merge commit that indicates where the branches were merged.
                    
                    <div className="flex flex-col">
                        <img src={threeWayBefore} alt="Three Way Merge in Git" className="mt-20"/>
                        <span className="stress mt-8">Before Merge</span>
                    </div>

                    <div className="flex flex-col">
                        <img src={threeWayAfter} alt="Three Way Merge in Git" className="mt-20"/>
                        <span className="stress mt-8">After Merge</span>
                    </div>
                    </li>
                </ul>

                <ul>
                    <li><span className="stress">Squash and Merge</span> Combines all commits from a branch into a single commit before merging it into the main branch. This helps keep the commit history clean and concise.
                    
                    <div className="flex flex-col">
                        <img src={squashAndMergeBefore} alt="Squash and Merge Before" className="mt-20"/>
                        <span className="stress mt-8">Before Merge</span>
                    </div>

                    <div className="flex flex-col">
                        <img src={squashAndMergeAfter} alt="Squash and Merge After" className="mt-20"/>
                        <span className="stress mt-8">After Merge</span>
                    </div>
                    </li>
                </ul>

                <ul>
                    <li>
                        <span className="stress">Rebase and Merge:</span> This strategy takes each commit from the feature branch and adds them one by one on top of the main branch, as if the work started from the latest main branch changes. This keeps the history straight, with no extra merge commits.
                    
                        <div className="flex flex-col">
                            <img src={rebaseAndMergeBefore} alt="Rebase and Merge Before" className="mt-20" />
                            <span className="stress mt-8">Before Merge</span>
                        </div>

                        <div className="flex flex-col">
                            <img src={rebaseAndMergeAfter} alt="Rebase and Merge After" className="mt-20" />
                            <span className="stress mt-8">After Merge</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default GitReviseAndBranching;