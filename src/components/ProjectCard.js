import { currencyFormatter } from "../utils/currencyFormatter";
import { useProjectsContext } from "../hooks/useProjectsContext";
import moment from "moment";
import { useState } from "react";

import ProjectForm from "./ProjectForm";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { dispatch } = useProjectsContext();

  const { user } = useAuthContext();
  const handleDelete = async () => {
    if (!user) {
      return;
    }
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/projects/${project._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };

  const handleUpdate = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const handleOverlay = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <div className="single-project bg-gray-800 p-3 2xl:p-5 rounded-xl shadow-xl border border-gray-700 flex flex-col gap-5 w-[25rem] xl:[30rem] ">
      <div className="top">
        <span className="text-teal-400">ID: {project._id}</span>
        <h3 className="text-3xl font-medium truncate">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest text-gray-500 font-medium">
          {project.tech}
        </span>
      </div>
      <div className="mid text-gray-300 flex gap-3 2xl:gap-10 ">
        <div className="left flex flex-col">
          <span>Budget: {currencyFormatter(project.budget)}</span>
          <span>
            Added on: {moment(project.createdAt).format("MMM DD hh:mm A")}
          </span>
          <span>
            Last Updated: {moment(project.updatedAt).format("MMM DD hh:mm A")}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>Manager: {project.manager}</span>
          <span>Developers: {project.dev}</span>
          <span>
            Duration:{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button
          onClick={handleUpdate}
          className="bg-teal-400 text-gray-900 py-2 px-5 rounded shadow-xl hover:bg-teal-50 duration-300"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-rose-500 hover:underline"
        >
          Delete
        </button>
      </div>
      {/* overlay */}
      <div
        onClick={handleOverlay}
        className={`overlay fixed z-[1] h-screen w-screen bg-gray-900/50 backdrop-blur-sm top-0 right-0 left-0 bottom-0 ${
          isOverlayOpen ? "" : "hidden"
        }`}
      ></div>
      <div
        className={`update-model w-[30rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-5 rounded-xl shadow-xl border border-gray-700 z-[2] ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <ProjectForm
          project={project}
          setIsModalOpen={setIsModalOpen}
          setIsOverlayOpen={setIsOverlayOpen}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
