"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gadget Gizmo",
    description: "a full stack e-commerce website for tech and gadgets using Mern stack",
    image: "/images/projects/1.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/saqib147/Gizmo-Gadgets",
    previewUrl: "https://gizmo-gadgets.vercel.app/",
  },
  {
    id: 2,
    title: "Gadget Gizmo",
    description: "a full stack e-commerce website for tech and gadgets using Mern stack",
    image: "/images/projects/2.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/saqib147/Gizmo-Gadgets",
    previewUrl: "https://github.com/saqib147/Gizmo-Gadgets",
  },
  {
    id: 3,
    title: "Gadget Gizmo",
    description: "a full stack e-commerce website for tech and gadgets using Mern stack",
    image: "/images/projects/3.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/saqib147/Gizmo-Gadgets",
    previewUrl: "https://github.com/saqib147/Gizmo-Gadgets",
  },
  {
    id: 4,
    title: "Internee.pk ",
    description: "Front page of an internship finder website.",
    image: "/images/projects/4.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/saqib147/TSK-000-41",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-swiperjs-activity-7232372811720216579-qpD9?utm_source=share&utm_medium=member_android",
  },
  {
    id: 5,
    title: "Internee.pk ",
    description: "Front page of an internship finder website.",
    image: "/images/projects/5.jpeg",
    tag: ["All","Branding","Social"],
    gitUrl: "https://github.com/saqib147/TSK-000-41",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-swiperjs-activity-7232372811720216579-qpD9?utm_source=share&utm_medium=member_android",
  },
  {
    id: 6,
    title: "Internee.pk ",
    description: "Front page of an internship finder website.",
    image: "/images/projects/6.jpeg",
    tag: ["All","Branding","Social"],
    gitUrl: "https://github.com/saqib147/TSK-000-41",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-swiperjs-activity-7232372811720216579-qpD9?utm_source=share&utm_medium=member_android",
  },
  {
    id: 7,
    title: "Internee.pk ",
    description: "Front page of an internship finder website.",
    image: "/images/projects/7.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/saqib147/TSK-000-41",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-swiperjs-activity-7232372811720216579-qpD9?utm_source=share&utm_medium=member_android",
  },
  {
    id: 8,
    title: "Authentication System ",
    description: "book info website login and registeration system with firebase",
    image: "/images/projects/8.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: " https://github.com/saqib147/TSK-000-42",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-firebase-activity-7236388137575297025-aZ1-?utm_source=share&utm_medium=member_android",
  },
  {
    id: 9,
    title: "Authentication System: ",
    description: "book info website login and registeration system with firebase",
    image: "/images/projects/9.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: " https://github.com/saqib147/TSK-000-42",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-firebase-activity-7236388137575297025-aZ1-?utm_source=share&utm_medium=member_android",
  },
  {
    id: 10,
    title: "Authentication System:",
    description: "book info website login and registeration system with firebase",
    image: "/images/projects/10.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: " https://github.com/saqib147/TSK-000-42",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-firebase-activity-7236388137575297025-aZ1-?utm_source=share&utm_medium=member_android",
  },
  {
    id: 11,
    title: "Authentication System:",
    description: "book info website login and registeration system with firebase",
    image: "/images/projects/11.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: " https://github.com/saqib147/TSK-000-42",
    previewUrl: "https://www.linkedin.com/posts/saqib-arshad-48560724a_react-tailwindcss-firebase-activity-7236388137575297025-aZ1-?utm_source=share&utm_medium=member_android",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Branding"
          isSelected={tag === "Branding"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Social"
          isSelected={tag === "Social"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
