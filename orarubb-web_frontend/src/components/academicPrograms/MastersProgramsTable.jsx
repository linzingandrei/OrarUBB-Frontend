import React from 'react';
import './AcademicProgramsTable.scss';
import {
    useGetAcademicSpecializationsMasterQuery
} from "../../api/AcademicSpecializationsApi.js";
import {useNavigate} from "react-router-dom";


const MastersProgramsTable = () => {
    const navigate = useNavigate();
    const {data: mastersData = []} = useGetAcademicSpecializationsMasterQuery("ro-RO");
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
                        <td
                            onClick={() => {
                                navigate("/group/ie3");
                            }}
                        >
                            {years.map((year, i) => (
                                <a key={i} href="#">{`Anul ${year}`}</a>
                            ))}
                        </td>
                        {/* <td>
                {years.map((year, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(
                        `/group/${specialization.academicSpecializationId}/${year}`
                      );
                    }}
                  >
                    {`Anul ${year}`}
                  </a>
                ))}
              </td> */}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default MastersProgramsTable;
