import React, { useState } from 'react';
import './StudyProgramsPage.scss';
import MastersProgramsTable from '../../components/academicPrograms/MastersProgramsTable.jsx';
import BachelorsProgramsTable from '../../components/academicPrograms/BachelorsProgramsTable.jsx';
import Layout from "../../components/layout/Layout.jsx";

const StudyProgramsPage = () => {
    const [activeTab, setActiveTab] = useState('bachelors');

    return (
        <Layout>
            <div className="study-programs-page-container">
                <div className="menu-buttons-container">
                    <button
                        className={`menu-button ${activeTab === 'bachelors' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bachelors')}
                    >
                        Licență
                    </button>
                    <div className="delimitator-line"></div>
                    <button
                        className={`menu-button ${activeTab === 'masters' ? 'active' : ''}`}
                        onClick={() => setActiveTab('masters')}
                    >
                        Master
                    </button>
                </div>
                <div className="study-programs-table-container">
                    {activeTab === 'bachelors' && <BachelorsProgramsTable />}
                    {activeTab === 'masters' && <MastersProgramsTable />}
                </div>
            </div>
        </Layout>
    );
};

export default StudyProgramsPage;
