import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import SectionTitle from "../components/SectionTitle";

import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { projects, dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/projects`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const json = await res.json();
      //realtime project added
      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };
    if (user) {
      getAllProjects();
    }
  }, [dispatch, user]);
  return (
    <div className="home container mx-auto py-10 xl:py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <div className=" col-span-1 xl:col-span-2">
        {projects?.length < 1 ? (
          <p className="flex flex-col items-center justify-center ">
            No Project Added
          </p>
        ) : null}

        {projects?.length > 0 && <SectionTitle SectionTitle="All Projects" />}

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
