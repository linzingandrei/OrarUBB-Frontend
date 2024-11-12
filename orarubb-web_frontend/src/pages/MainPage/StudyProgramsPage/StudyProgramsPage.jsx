import './StudyProgramsPage.scss';
import MastersProgramsTable from '../../../components/academicPrograms/MastersProgramsTable';
import BachelorsProgramsTable from '../../../components/academicPrograms/BachelorsProgramsTable';
import Layout from "../../../components/layout/Layout.jsx";

const StudyProgramsPage = () => (
    <Layout>
        <div className="study-programs-page-container">
            <div className="study-programs-table-container">
                <BachelorsProgramsTable/>
            </div>
            <div className="study-programs-table-container">
                <MastersProgramsTable/>
            </div>
        </div>

    </Layout>
);

export default StudyProgramsPage;
