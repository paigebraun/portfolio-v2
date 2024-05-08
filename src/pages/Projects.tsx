import { useParams } from 'react-router-dom';
import projectInfo from '../modules/projectInfo';
import Contact from '../components/Contact';

import { MdOpenInNew } from "react-icons/md";

function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
      }
    );
}

function Projects() {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projectInfo.find((project) => project.id === projectId);

    if (!project) {
        return (
            <div>Project not found.</div>
        )
    }

    // Split the description into paragraphs
    const paragraphs = project.description.split('\n');

    return (
            <div className='max-w-3xl flex-1 text-xs'>
                <h3 className='font-bold mb-4'>{toTitleCase(project.name)}</h3>
                {paragraphs.map((paragraph, index) => (
                    <p className='mb-2' key={index}>{paragraph}</p>
                ))}
                <p className='mb-4'><span className="font-bold">Tech: </span>{project.tech}</p>
                {project.livePreview && (
                    <div className='flex gap-4'>
                        <a className='font-bold flex items-center mb-2' href={project.livePreview} target='_blank' rel="noopener noreferrer">Live Preview
                            <MdOpenInNew className="ml-2" />
                        </a>
                        <a className='font-bold flex items-center mb-2' href={project.livePreview} target='_blank' rel="noopener noreferrer">Code                            <MdOpenInNew className="ml-2" />
                        </a>
                    </div>
                )}
                <Contact />
            </div>
    )
}

export default Projects;