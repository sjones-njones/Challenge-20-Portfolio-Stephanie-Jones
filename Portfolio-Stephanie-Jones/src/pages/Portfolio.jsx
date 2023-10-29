import projects from '../projects';

export default function Portfolio() {
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {projects.map((project) => (
          <p key={project.id}>
           <div className='card'>
<div className='card-body'>


            <a className="badge bg-primary rounded-pill" href={project.deployedLink}>
            <img className="my-2"
        style={{ width: "60%" }}
        alt="cover" src={project.image}></img>
              {`${project.title}`}</a>
            <p>{`${project.summary}`}</p>
            <p>{`${project.technologies}`}</p>
            <a className="badge bg-primary rounded-pill" href={project.github}>GitHub Repo</a>
        </div>
        </div>
          </p>

        ))
        }
      </ul >
    </div >
  );
}