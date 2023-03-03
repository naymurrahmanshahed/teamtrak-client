import SectionTitle from "./SectionTitle";

const ProjectForm = () => {
  return (
    <form className="project-form flex flex-col gap-3 2xl:gap-5">
      <SectionTitle SectionTitle={"Add a New Project"} />

      <div className="form-control flex flex-col gap-2 ">
        <label
          className="cursor-pointer hover:text-teal-400 duration-300"
          htmlFor="title"
        >
          Project title
        </label>
        <input
          className="bg-transparent border border-gray-500
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300
          "
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
          className="bg-transparent border border-gray-500
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300
          "
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
          className="bg-transparent border border-gray-500
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300
          "
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
          className="bg-transparent border border-gray-500
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300
          "
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
          className="bg-transparent border border-gray-500
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300
          "
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
          className="bg-transparent border border-gray-500
          py-2 px-5
          outline-none
          rounded-lg focus:border-teal-400 duration-300
          "
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
    </form>
  );
};

export default ProjectForm;
