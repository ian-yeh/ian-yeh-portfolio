import React, { useState } from "react";
import styles from "./Project.module.css";

import { IonIcon } from '@ionic/react';
import {
  linkOutline
} from 'ionicons/icons';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repository: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  repository,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse movement to update cursor position
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = event.currentTarget.getBoundingClientRect(); // Get container's position in the viewport
    setCursorPosition({
      x: event.clientX - containerRect.left, // Cursor X relative to the container
      y: event.clientY - containerRect.top, // Cursor Y relative to the container
    });
  };

  // Handle mouse enter to show the hover box
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Handle mouse leave to hide the hover box
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={repository} target="_blank" className={styles.link}>
        <img className={styles.image} src={imageUrl} alt={title} />
        <h2 className={`section2Text ${styles.title}`}>{title}</h2>
        <p className={`section2Text ${styles.description}`}>{description}</p>

        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span className={`section2Text ${styles.tech}`} key={index}>
              {tech}
            </span>
          ))}
        </div>
      </a>

      {/* Hover box that follows the cursor */}
      {isHovering && (
        <div
          className={styles.hoverBox}
          style={{
            position: "absolute",
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -100%)", // Center and adjust above cursor
          }}
        >
          <p className={styles.view}>View</p>
          <IonIcon icon={linkOutline} className={styles.icon}/>
        </div>
      )}
    </div>
  );
};

export default Project;
