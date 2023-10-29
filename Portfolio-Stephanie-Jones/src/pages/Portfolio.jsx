import projects from '../projects';

export default function Portfolio() {
  return (
    <div className="row">
<div className="">
{projects.map((project) => (
  <p key={project.id}>
    <div className="card rounded pt-2 p-5">

    <h5 className="card-title text-center">{project.title}</h5>
<a href={project.deployedLink}>
  <img src={project.image} className="card-img-top rounded" alt="site pictures"></img></a>
  <div className="card-body">
  <p className="card-text ">{project.summary}</p>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Technologies: {project.technologies}</li>
  </ul>
  <div className="card-body">
    <a href={project.github} className="card-link">GitHub Repo</a>
    <a href={project.deployedLink} className="card-link">Deployed Link</a>
  </div>
</div>
    </div>
</p>
))}
</div>
 </div>          
  );
}