import React from 'react';
import './AcademicProgramsTable.scss';
import {
    useGetAcademicSpecializationsMasterQuery
} from "../../api/AcademicSpecializationsApi.js";
import {useNavigate} from "react-router-dom";


const MastersProgramsTable = () => {
  const navigate = useNavigate();
  const { data: mastersData = [] } =
    useGetAcademicSpecializationsMasterQuery("ro-RO");

  return (
    <table className="programs-table">
      <thead>
        <tr>
          <th>Studii Master</th>
          <th>Anul</th>
        </tr>
      </thead>
      <tbody>
        {mastersData.map((specialization) => {
          const years = specialization.years.split(";").filter((year) => year);
          return (
            <tr key={specialization.academic_specialization_id}>
              <td>{specialization.name}</td>
              <td>
                {years.map((groupYear) => (
                  <a
                    key={`${specialization.academic_specialization_id}-${groupYear}`} // Unique key combining specialization and groupYear
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(
                        `/group/${specialization.nameAbbreviated}/${groupYear}`
                      );
                    }}
                  >
                    {`Anul ${groupYear}`}
                  </a>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MastersProgramsTable;
