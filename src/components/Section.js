import ProgramCard from "./ProgramCard";

const Section = ({ title, courses }) => {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-gray-500 mt-2">
          Our most loved programs that kids absolutely adore!
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {courses.map((course) => (
          <ProgramCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Section;
