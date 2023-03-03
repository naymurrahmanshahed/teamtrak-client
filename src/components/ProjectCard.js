import { currencyFormatter } from "../utils/currencyFormatter";

const ProjectCard = ({ project }) => {
  return (
    <div className="single-project bg-gray-800 p-5 rounded-xl shadow-xl border border-gray-700 flex flex-col gap-5 w-[25rem] xl:[30rem]">
      <div className="top">
        <span className="text-teal-400">ID: {project._id}</span>
        <h3 className="text-3xl font-medium">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest text-gray-500 font-medium">
          {project.tech}
        </span>
      </div>
      <div className="mid text-gray-300 flex gap-10 ">
        <div className="left flex flex-col">
          <span>Budget: {currencyFormatter(project.budget)}</span>
          <span>
            Added on: {new Date(project.createdAt).toLocaleDateString()}
          </span>
          <span>
            Last Updated: {new Date(project.updatedAt).toLocaleDateString()}
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
        <button className="bg-teal-400 text-gray-900 py-2 px-5 rounded shadow-xl hover:bg-teal-50 duration-300">
          Update
        </button>
        <button className="text-rose-500 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
