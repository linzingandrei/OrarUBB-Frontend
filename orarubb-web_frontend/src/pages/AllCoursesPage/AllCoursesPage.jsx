import Card from "../../components/Card";
import "./CardsPage.scss";
import { getCourses } from "../../services/courseService";
import Layout from "../../components/layout/Layout";
import { useGetAllCourseInstancesByLanguageQuery } from "../../api/CoursesApi";

const AllCoursesPage = () => {
  const { data: courses = [], isLoading } =
    useGetAllCourseInstancesByLanguageQuery("ro-RO");

  //const mockCourses = getCourses();

  return (
    <Layout>
      <div className="page">
        <h1>Orar discipline</h1>
        <div className="cards-list">
          {courses.map((course) => (
            <Card
              key={course.courseId}
              title={course.courseName}
              subtitle={`Cod: ${course.courseCode}`}
              link={`/course/${course.courseName}/${course.courseCode}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllCoursesPage;
