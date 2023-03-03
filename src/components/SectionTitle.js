const SectionTitle = ({ SectionTitle, project }) => {
  return (
    <div className="Section-title">
      <h2
        className={`text-3xl font-medium text-teal-400 ${
          project ? "mb-3" : "mb-10"
        } `}
      >
        {SectionTitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
