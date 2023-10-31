
import React from 'react'; 

// Individual Cards 
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.title} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.title}</p>
              <p className="proj-icons-container">
              <a href={props.github}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" /></a> 
              <a href={props.deployedLink}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a> 
       
             
             </p>
              <p className="topics">
                    ({props.technology})
                </p>
        </div>
      </div>
        );
}
  
  export default ProjectCards;