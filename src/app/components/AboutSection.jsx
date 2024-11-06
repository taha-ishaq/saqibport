"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript </li>
        <li>Back-End</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>UI/UX Designing</li>
        <li>Git</li>
        <li>npm</li>
        <li>Bootstrap</li>
        <li>Wordpress</li>
        <li>Woo-Commerce</li>
        <li>Design and UX: Responsive Design, UI Components, Figma, Elementor</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ADP-Software Engineering 
        National College of Business Administration and Economicss</li>
        <li>
ICS
Govt. Islamia College Railway Road Lahore</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming with JavaScript by META
        https://coursera.org/verify/FJMZA96EJALV</li>
        <li>Introduction to Front End Development by Meta
        https://coursera.org/verify/7NVV6KR7NT9S</li>
        <li>Elementor – Build Drag & Drop WordPress Websites
        Will provide if needed</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          FrontEnd Developer
          A Software Engineer  with hands-on experience in web development and front-end technologies, including JavaScript, React, HTML, and CSS,  building interactive projects for e-commerce and other platforms, with a focus on responsive design and user experience. Seeking an opportunity to apply and expand skills in a dynamic tech environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
