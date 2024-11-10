import Card from '../components/Card';
import './CardsPage.scss'
import { getCourses } from '../services/courseService';

const AllCoursesPage = () => {
    const mockCourses = getCourses();

    return (
        <div className="page">
            <h1>Orar discipline</h1>
            <div className="cards-list">
                {mockCourses.map((course) => (
                    <Card
                        key={course.course_id}
                        title={course.course_name}
                        subtitle={`Cod: ${course.course_code}`}
                        link={`/course/${course.course_id}`}  // assuming for now the course schedule page is at `/course/:id`
                    />
                ))}
            </div>
        </div>
    );
};

export default AllCoursesPage;
