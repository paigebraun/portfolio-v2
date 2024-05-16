import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projectInfo, { Project } from '../modules/projectInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NotFound from './NotFound';
import { MdOpenInNew, MdClose, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

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
    const project: Project | undefined = projectInfo.find((project) => project.id === projectId);

    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);

    const openImage = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeImage = () => {
        setSelectedImageIndex(null);
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!touchStartX) {
            setTouchStartX(event.touches[0].clientX);
        }
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX) {
            const touchMoveX = event.touches[0].clientX;
            const diffX = touchMoveX - touchStartX;
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe right
                    openPrevImage();
                } else {
                    // Swipe left
                    openNextImage();
                }
                setTouchStartX(null);
            }
        }
    };

    const openNextImage = () => {
        setSelectedImageIndex((selectedImageIndex != null ? selectedImageIndex + 1 : 0 + (project?.src ? project.src.length : 0)) % (project?.src ? project.src.length : 1));
    };
    
    const openPrevImage = () => {
        setSelectedImageIndex((selectedImageIndex != null ? selectedImageIndex - 1 : 0 + (project?.src ? project.src.length : 0)) % (project?.src ? project.src.length : 1));
    };

    const handleImageLoad = (index: number) => {
        setImageLoaded((prevLoaded) => {
            const newLoaded = [...prevLoaded];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className='max-w-3xl flex-1 text-xs'>
            <h3 className='font-bold mb-4'>{toTitleCase(project.name)}</h3>
            <p className='mb-4'>{project.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}</p>
            <p className='mb-4'><span className="font-bold">Tech: </span>{project.tech}</p>
            {project.livePreview && (
                <div className='flex gap-4'>
                    <a className='font-bold flex items-center mb-2 hover:underline' href={project.livePreview} target='_blank' rel="noopener noreferrer">Live Preview
                        <MdOpenInNew className="ml-2" />
                    </a>
                    <a className='font-bold flex items-center mb-2 hover:underline' href={project.code} target='_blank' rel="noopener noreferrer">Code
                        <MdOpenInNew className="ml-2" />
                    </a>
                </div>
            )}
            {!project.livePreview && (
                <a className='font-bold flex items-center mb-2 hover:underline' href={project.code} target='_blank' rel="noopener noreferrer">Code
                    <MdOpenInNew className="ml-2" />
                </a>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                {project.src?.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => openImage(index)}
                        onLoad={() => handleImageLoad(index)}
                        alt={`Image ${index + 1}`}
                        style={{
                            opacity: imageLoaded[index] ? 1 : 0,
                            transition: 'opacity 0.5s',
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                ))}
            </div>
            {selectedImageIndex !== null && project.src && (
                <div
                    className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-95'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <MdClose className='absolute top-4 right-4 text-gray-400 text-2xl cursor-pointer' onClick={closeImage}></MdClose>
                    <MdOutlineArrowBackIos className='absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-2xl cursor-pointer' onClick={openPrevImage}></MdOutlineArrowBackIos>
                    <MdOutlineArrowForwardIos className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 text-2xl cursor-pointer' onClick={openNextImage}></MdOutlineArrowForwardIos>
                    <div className='relative max-w-3xl'>
                        <img src={project.src[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} className='max-w-full' />
                    </div>
                </div>
            )}

            <Contact />
            <Footer />
        </div>
    )
}

export default Projects;
