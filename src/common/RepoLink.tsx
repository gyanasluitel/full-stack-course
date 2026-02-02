import './RepoLink.css';

interface RepoLinkProps {
  link: string;
  name: string;
}

const RepoLink = ({ link, name }: RepoLinkProps) => (
  <div className="repo-link-box">
    <div className="repo-link-label">The code up until now can be found in: <a className="repo-link" href={link} target="_blank" rel="noopener noreferrer">{name}</a></div>
  </div>
);

export default RepoLink;
