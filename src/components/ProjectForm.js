import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useProjectsContext } from "../hooks/useProjectsContext";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [dev, setDev] = useState("");
  const [error, setError] = useState(null);

  const [emptyFields, setEmptyFields] = useState([]);

  const { dispatch } = useProjectsContext();
  const handleForm = async (e) => {
    e.preventDefault();
    //data
    const projectObj = { title, tech, budget, duration, manager, dev };

    //post req here
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectObj),
    });

    const json = await res.json();

    //!res.ok set error
    if (!res.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    //res.ok reset

    if (res.ok) {
      setTitle("");
      setTech("");
      setBudget("");
      setDuration("");
      setManager("");
      setDev("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_PROJECT", payload: json });
    }
  };
  return (
    <form
      onSubmit={handleForm}
      className="project-form flex flex-col gap-3 2xl:gap-5"
    >
      <SectionTitle SectionTitle={"Add a New Project"} />

      <div className="form-control flex flex-col gap-2 ">
        <label
          className="cursor-pointer hover:text-teal-400 duration-300"
          htmlFor="title"
        >
          Project title
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={`bg-transparent border 
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300 ${
            emptyFields?.includes("title")
              ? "border-rose-500"
              : "border-gray-500"
          }`}
          type="text"
          placeholder="e.g. e-commerce website"
          id="title"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label
          className="cursor-pointer hover:text-teal-400 duration-300"
          htmlFor="technology"
        >
          Technologies
        </label>
        <input
          onChange={(e) => setTech(e.target.value)}
          value={tech}
          className={`bg-transparent border 
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300 ${
            emptyFields?.includes("tech")
              ? "border-rose-500"
              : "border-gray-500"
          }`}
          type="text"
          placeholder="e.g. node.js react"
          id="technology"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label
          className="cursor-pointer hover:text-teal-400 duration-300"
          htmlFor="budget"
        >
          Budget (In USD)
        </label>
        <input
          onChange={(e) => setBudget(e.target.value)}
          value={budget}
          className={`bg-transparent border 
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300 ${
            emptyFields?.includes("budget")
              ? "border-rose-500"
              : "border-gray-500"
          }`}
          type="number"
          placeholder="e.g. 5 USD"
          id="budget"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label
          className="cursor-pointer hover:text-teal-400 duration-300"
          htmlFor="duration"
        >
          Duration (In weeks)
        </label>
        <input
          onChange={(e) => setDuration(e.target.value)}
          value={duration}
          className={`bg-transparent border 
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300 ${
            emptyFields?.includes("duration")
              ? "border-rose-500"
              : "border-gray-500"
          }`}
          type="number"
          placeholder="e.g. 2 weeks"
          id="duration"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label
          className="cursor-pointer hover:text-teal-400 duration-300"
          htmlFor="manager"
        >
          Manager
        </label>
        <input
          onChange={(e) => setManager(e.target.value)}
          value={manager}
          className={`bg-transparent border 
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300 ${
            emptyFields?.includes("manager")
              ? "border-rose-500"
              : "border-gray-500"
          }`}
          type="text"
          placeholder="e.g. ayesha"
          id="manager"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label
          className="cursor-pointer hover:text-teal-400 duration-300"
          htmlFor="dev"
        >
          Developers
        </label>
        <input
          onChange={(e) => setDev(e.target.value)}
          value={dev}
          className={`bg-transparent border 
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300 ${
            emptyFields?.includes("dev") ? "border-rose-500" : "border-gray-500"
          }`}
          type="number"
          placeholder="e.g 5"
          id="dev"
        />
      </div>

      <button
        type="submit"
        className="bg-teal-400 text-gray-900 py-3 rounded-lg hover:bg-teal-50 duration-300"
      >
        Add project
      </button>
      {error && <p className="text-rose-500">*{error}</p>}
    </form>
  );
};

export default ProjectForm;
