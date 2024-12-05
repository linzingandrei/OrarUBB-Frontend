import Card from '../../components/Card';
import './CardsPage.scss'
import { getCourses } from '../../services/courseService';
import Layout from '../../components/layout/Layout';

const AllCoursesPage = () => {
    const mockCourses = getCourses();

    return (
        <Layout>
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
        </Layout>
    );
};

export default AllCoursesPage;
