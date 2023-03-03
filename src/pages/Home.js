import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);

        //data fetch
        const res = await fetch("http://localhost:5000/api/projects/");
        if (!res.ok) {
          throw new Error("Something Went Wrong");
        }

        const data = await res.json();

        console.log(data);

        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getProjects();
  }, []);
  return (
    <div className="home container mx-auto py-10 2xl:py-20 grid grid-cols-3 gap-5 2xl:gap-10">
      <div className="left col-span-2">
        <SectionTitle SectionTitle="All Projects" className="mb-10" />
        <div className="project-wrapper flex gap-5 2xl:gap-10 flex-wrap">
          {projects &&
            projects.map((project) => <p key={project._id}>{project.title}</p>)}
        </div>
      </div>
      <div className="right col-span-1"></div>
    </div>
  );
};

export default Home;
