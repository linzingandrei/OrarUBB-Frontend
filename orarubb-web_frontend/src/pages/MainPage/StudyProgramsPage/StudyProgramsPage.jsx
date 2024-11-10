import React from 'react';
import './StudyProgramsPage.scss'; 
import MastersProgramsTable from '../../../components/academicPrograms/MastersProgramsTable';
import BachelorsProgramsTable from '../../../components/academicPrograms/BachelorsProgramsTable';

const StudyProgramsPage = () => (
  <div className="page-container">
    <div className="table-container">
        <BachelorsProgramsTable />
    </div>
    <div className="table-container">
      <MastersProgramsTable />
    </div>
  </div>
);

export default StudyProgramsPage;
