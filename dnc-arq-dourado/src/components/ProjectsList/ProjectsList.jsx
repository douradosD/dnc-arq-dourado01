import { useState, useEffect } from 'react'
import './ProjectsList.css'

//ASSETS
import LikedFilled from '../../assets/like_filled.svg'
import Like from '../../assets/like.svg'

//UTILS
import { getApiData } from '../../services/apiServices'

function ProjectsList() {
    const [projects, setProjects] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }
        fetchData()
    }, [])

    return (
     <div className="projects-section">
        <div className="projects-hero">
           <h2>Follow Our Projects</h2>
           <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        </div>
        <div className="projects-grid">
            {
                projects.map((projects) => (
                    <div className="projects-card d-flex jc-center al-center fd-column" key={projects.id}>
                           <div 
                                className="thumb tertiary-background">
                                
                            </div>
                            <h3>joão silva</h3>
                            <p>BH, Brasil</p>
                            <img src={LikedFilled} height="20px"/>
                    </div>
                ))
            }
        </div>
     </div>
    )
}

export default ProjectsList