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
      <div className="programs-table-container">

          <table className="programs-table">
              <thead>
              <tr>
                  <th>Studii Master</th>
                  <th className='anul-head'>Anul</th>
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
                                  <button className="btn-studyprograms"
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
                                  </button>
                              ))}
                          </td>
                      </tr>
                  );
              })}
              </tbody>
          </table>
      </div>
          );
          };

          export default MastersProgramsTable;
