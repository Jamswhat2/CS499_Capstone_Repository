import React, {useContext, useEffect} from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';
import "../cssFiles/Login.css";

const ProjectList = (props) => {
  const {projects, setProjects} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/projects");
        setProjects(response.data.data.projects)
        console.log('Projects: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])

  const handleDelete =  async (e, id) =>{
    try{
        const response = await ResumeUrl.delete( `/v1/projects/${id}`)
        setProjects(projects.filter(project=>{
            return project.id !== id
        }))
        console.log(response)
    }catch (err) {

    }
}

const handleEdit = (e, id) => {
  navigate(`/blocks/${id}/updateProject`);
}

  return (
    
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {projects && 
                    projects.map(project =>{
                    return(
                        <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{project.role}</td>
                        <td>{project.start_date}</td>
                        <td>{project.end_date}</td>
                        <td>{project.description}</td>
                        <td><button className="secondary" onClick={(e)=> handleEdit(e, project.id)}>Edit</button></td>
                        <td><button className="negative" onClick={(e) => handleDelete(e, project.id)}>Delete</button></td>
                        </tr>

                    )
                    
                } )}
          
        </tbody>
      </table>
    </div>
    
  )
}

export default ProjectList;