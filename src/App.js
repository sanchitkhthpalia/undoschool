import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AgeSelector from "./components/AgeSelector";
import ProgramSection from "./components/ProgramSection";
import InstructorSection from "./components/InstructorSection";
import InstructorCourseRow from "./components/InstructorCourseRow";
import WebinarSection from "./components/WebinarSection";
import ExploreCategories from "./components/ExploreCategories";
import FilterWithTime from "./components/FilterWithTime";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AgeSelector />

      <section className="py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <ProgramSection title="New Launches" />
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <ProgramSection title="Featured Courses" />
        </div>
      </section>

      <InstructorSection />

      <InstructorCourseRow />

      <WebinarSection />

      <ExploreCategories />

      <FilterWithTime />
    </>
  );
}

export default App;
