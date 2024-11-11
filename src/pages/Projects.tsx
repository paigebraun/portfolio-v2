import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectInfo, { Project } from "../modules/projectInfo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import Popup from "../components/Popup";

import { MdOpenInNew } from "react-icons/md";

function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
}

function formatProjectName(name: string) {
    if (name.toLowerCase() === "wnba swish") {
        return "WNBA Swish";
    }
    return toTitleCase(name);
}

function Projects() {
    const { projectId } = useParams<{ projectId: string }>();
    const project: Project | undefined = projectInfo.find(
        (project) => project.id === projectId
    );

    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
        null
    );
    const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);

    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [selectedImageIndex]);

    const openImage = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeImage = () => {
        setSelectedImageIndex(null);
    };

    const openNextImage = () => {
        if (project?.src) {
            const currentIndex = selectedImageIndex ?? 0;
            setSelectedImageIndex((currentIndex + 1) % project.src.length);
        }
    };

    const openPrevImage = () => {
        if (project?.src) {
            const currentIndex = selectedImageIndex ?? 0;
            setSelectedImageIndex(
                (currentIndex - 1 + project.src.length) % project.src.length
            );
        }
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
        <div className="max-w-3xl flex-1 text-xs">
            <h3 className="font-bold mb-4">
                {formatProjectName(project.name)}
            </h3>
            <p className="mb-4">
                {project.description.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <p className="mb-4">
                <span className="font-bold">Tech: </span>
                {project.tech}
            </p>
            {project.livePreview && (
                <div className="flex gap-4">
                    <a
                        className="font-bold flex items-center mb-2 hover:underline"
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer">
                        Live Preview <MdOpenInNew className="ml-1" />
                    </a>
                    <a
                        className="font-bold flex items-center mb-2 hover:underline"
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer">
                        Code <MdOpenInNew className="ml-1" />
                    </a>
                </div>
            )}
            {!project.livePreview && (
                <a
                    className="font-bold flex items-center mb-2 hover:underline"
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer">
                    Code <MdOpenInNew className="ml-1" />
                </a>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {project.src?.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => openImage(index)}
                        onLoad={() => handleImageLoad(index)}
                        alt={`Image ${index + 1}`}
                        className="cursor-pointer"
                        style={{
                            opacity: imageLoaded[index] ? 1 : 0,
                            transition: "opacity 0.5s",
                            width: "100%",
                            height: "auto",
                        }}
                    />
                ))}
            </div>
            {selectedImageIndex !== null && project.src && (
                <Popup
                    isOpen={selectedImageIndex !== null}
                    src={project.src[selectedImageIndex]}
                    onClose={closeImage}
                    currentIndex={selectedImageIndex}
                    totalImages={project.src.length}
                    nextImage={openNextImage}
                    prevImage={openPrevImage}
                    showCounter={false}
                />
            )}
            <Contact />
            <Footer />
        </div>
    );
}

export default Projects;
