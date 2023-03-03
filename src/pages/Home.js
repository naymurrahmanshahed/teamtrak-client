import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import SectionTitle from "../components/SectionTitle";

import { useProjectsContext } from "../hooks/useProjectsContext";
const Home = () => {
  const { projects, dispatch } = useProjectsContext();
  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects");

      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const json = await res.json();
      //realtime project added
      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };
    getAllProjects();
  }, [dispatch]);
  return (
    <div className="home container mx-auto py-10 2xl:py-20 grid grid-cols-3 gap-5 2xl:gap-10">
      <div className="left col-span-2">
        <SectionTitle SectionTitle="All Projects" />
        <div className="project-wrapper flex gap-5 2xl:gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectCard project={project} key={project._id} />
            ))}
        </div>
      </div>
      <ProjectForm />
    </div>
  );
};

export default Home;
