import projects from '../projects';

export default function Portfolio() {
  return (
    <div className="row">
<div className="col">
{projects.map((project) => (
  <p key={project.id}>
    <div className="card rounded pt-2 p-5">

    <h3 className="card-title text-center font-siz">{project.title}</h3>
    <div className='text-center'>
      
<a href={project.deployedLink}>
  <img src={project.image} className="img-fluid  card-img-top rounded" style={{ width: "40%" }} alt="site pictures"></img></a>
    </div>
  {/* <div className='row'> */}
    
  <div className='col '>

  <div className="card-body">
  <p className="card-text text-start">{project.summary}</p>
  <ul className="list-group list-group-flush">
    <li className="list-group-item text-start">Technologies: {project.technologies}</li>
  </ul>
  <div className="card-body text-center">
    <a href={project.github} className="card-link btn btn-secondary btn-lg">GitHub Repo</a>
    <a href={project.deployedLink} className="card-link btn btn-secondary btn-lg">Deployed Link</a>
  </div>
</div>
  </div>
  </div>
    {/* </div> */}
</p>
))}
</div>
 </div>          
  );
}